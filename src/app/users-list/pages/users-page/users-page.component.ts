import {Component, OnDestroy, OnInit} from '@angular/core';
import { IUserModel } from "../../models";
import { UsersHTTPService } from "../../services/users-http.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";
import {combineLatest} from "rxjs" ;
import {take} from "rxjs/operators";
import { HeaderFilterParamsService } from '../../../core/services';
import {UsersFilterService} from "../../services/users-filter.service";

const FILTER_BY_NAME = 'name';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['position', 'name', 'username', 'email', 'city', 'info'];
  public users: Array<IUserModel>;
  public isModalOpened: boolean;
  public userInfo: IUserModel;
  private queryParamsSub: Subscription;
  private filterParamsSub: Subscription;

  constructor(private usersHttpService: UsersHTTPService, private route: Router,
              private activateRoute: ActivatedRoute, private headerFilterParamsService: HeaderFilterParamsService,
              private usersFilterService: UsersFilterService) { }

  ngOnInit(): void {
    this.queryParamsSub = combineLatest(this.usersHttpService.loadUsersData(),
      this.activateRoute.queryParams.pipe(take(1)))
      .subscribe( ([users, params]) => {
        this.users = users;
        let user: Array<IUserModel> = this.users.filter( user => user.id == params['user']);

        if (user.length) {
          this.userInfo = user[0];
          this.isModalOpened = params['modal'];
        }
    });

    this.filterParamsSub = this.headerFilterParamsService.filterParams
      .subscribe( params => {
        if (params.typeOfFilter === FILTER_BY_NAME) {
          this.users = this.usersFilterService.sortUsers(this.users, params);
        } else {
          this.users = this.usersFilterService.filterUsers(this.users, params);
        }
    });
  }

  ngOnDestroy(): void {
    this.queryParamsSub.unsubscribe();
  }

  openModalWindow(user: IUserModel): void {
    this.userInfo = user;
    this.isModalOpened = true;
    this.route.navigate(['/users'], { queryParams: { modal: 'true', user: `${user.id}`}});
  }

  closeModalWindow(): void {
    this.isModalOpened = false;
    this.route.navigate(['/users']);
  }

}
