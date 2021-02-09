import { Component, OnInit } from '@angular/core';
import { IUserModel } from "../../models/IUserModel";
import { UsersHTTPService } from "../../services/users-http.service";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  public users: Array<IUserModel>;

  constructor(private usersHttpService: UsersHTTPService) { }

  ngOnInit(): void {
    console.log('sacas');
    this.usersHttpService.loadUsersData().subscribe( res => {
      this.users = res;
      console.log(this.users);
    });
  }

}
