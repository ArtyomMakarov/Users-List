import { Injectable } from '@angular/core';
import {IUserModel} from "../models";

@Injectable()
export class UsersFilterService {

  constructor() { }

  public sortUsers(users: Array<IUserModel>,
                     params: {typeOfFilter: string, isIncreased: boolean}): Array<IUserModel> {

    let newUsers: Array<IUserModel> = users.slice().sort((a, b) => {

      if (!!params.isIncreased) {
        return a.name > b.name ? 1 : -1
      } else  {
        return a.name < b.name ? 1 : -1;
      }
    });

    return newUsers;
  }

  public filterUsers(users: Array<IUserModel>,
                   params: {typeOfFilter: string, isIncreased: boolean}): Array<IUserModel> {

    const regExp: RegExp = new RegExp(params.typeOfFilter, 'ig');
    let newItems: Array<IUserModel> = users.filter((user) => {

      if (regExp.test(user.name)) {
        return user;
      }
    });

    return newItems;
  }
}
