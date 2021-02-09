import { Component, OnInit } from '@angular/core';
import { IUserModel } from "../../models";
import { UsersHTTPService } from "../../services";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  public displayedColumns: string[] = ['position', 'name', 'username', 'email', 'city', 'info'];
  public users: Array<IUserModel>;
  public isModalOpened: boolean;
  public userInfo: IUserModel;

  constructor(private usersHttpService: UsersHTTPService,
              private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.usersHttpService.loadUsersData().subscribe( res => this.users = res );

    this.activateRoute.queryParams.subscribe( params => {

      this.usersHttpService.loadUsersData().subscribe( res => {

        this.users = res;
        let user = this.users.filter( user => user.id == params['user']);
        this.userInfo = user[0];
        this.isModalOpened = params['modal'];

      } );
    });
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
