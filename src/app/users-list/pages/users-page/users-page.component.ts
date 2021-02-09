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
        let user = this.users.filter( user => user.id == params['user']);
        this.userInfo = user[0];
        this.isModalOpened = params['modal'];
        console.log(this.userInfo, this.isModalOpened)
    });

    this.filterParamsSub = this.headerFilterParamsService.filterParams
      .subscribe( params => {
        this.users = this.usersFilterService.filterUsers(this.users, params);
    });
  }

  ngOnDestroy(): void {
    this.queryParamsSub.unsubscribe();
  }

  openModalWindow(user: IUserModel): void {
    this.route.navigate(['/users'], { queryParams: { modal: 'true', user: `${user.id}`}});
    this.isModalOpened = true;
    this.userInfo = user;
  }

  closeModalWindow(val: boolean): void {
    this.route.navigate(['/users']);
    this.isModalOpened = val;
  }

}
