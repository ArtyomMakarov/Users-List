import { Component, OnInit } from '@angular/core';
import { IUserModel } from "../../models";
import { UsersHTTPService } from "../../services";

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

  constructor(private usersHttpService: UsersHTTPService) { }

  ngOnInit(): void {
    this.usersHttpService.loadUsersData().subscribe( res => this.users = res );
  }

  openModalWindow(user: IUserModel): void {
    this.isModalOpened = true;
    this.userInfo = user;
  }

  closeModalWindow(val: boolean): void {
    this.isModalOpened = val;
  }

}
