import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IUserModel} from "../../models";

@Component({
  selector: 'app-users-modal-window',
  templateUrl: './users-modal-window.component.html',
  styleUrls: ['./users-modal-window.component.scss']
})
export class UsersModalWindowComponent implements OnInit {
  @Output('modalClosed') private isModalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public userInfo: IUserModel;

  constructor() { }

  ngOnInit(): void {
  }

  closeModalWindow(): void {
    this.isModalClosed.emit(false);
  }

}
