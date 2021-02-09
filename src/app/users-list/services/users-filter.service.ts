import { Injectable } from '@angular/core';
import {IUserModel} from "../models";

@Injectable({
  providedIn: 'root'
})
export class UsersFilterService {

  constructor() { }

  public filterUsers(users: Array<IUserModel>,
                     params: {typeOfFilter: string, isIncreased: boolean}): Array<IUserModel> {

    if (!params || !users) {
      return users;
    }

    if (params.typeOfFilter === 'name') {
      let newUsers: Array<IUserModel>;
      if (params.isIncreased === true) {
        newUsers = users.slice().sort((a, b) => a.name > b.name ? 1 : -1);
      } else {
        newUsers = users.slice().sort((a, b) => a.name < b.name ? 1 : -1);
      }
      return newUsers;
    }

    if (params.typeOfFilter !== 'name') {
      const regExp: RegExp = new RegExp(params.typeOfFilter, 'ig');
      const newItems: Array<IUserModel> = users.filter((user) => {
        if (regExp.test(user.name)) {
          return user;
        }
      });
      return newItems;
    }
  }
}
