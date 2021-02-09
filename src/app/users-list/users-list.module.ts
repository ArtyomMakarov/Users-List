import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ UsersPageComponent ]
})
export class UsersListModule { }
