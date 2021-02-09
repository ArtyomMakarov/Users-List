import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserModel } from "../models/IUserModel";

@Injectable({
  providedIn: 'root'
})
export class UsersHTTPService {

  constructor(private http: HttpClient) { }

  public loadUsersData(): Observable<Array<IUserModel>> {
    return this.http.get<Array<IUserModel>>('http://jsonplaceholder.typicode.com/users')
  }
}
