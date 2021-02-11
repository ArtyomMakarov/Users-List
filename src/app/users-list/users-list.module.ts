import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SharedModule } from '../shared/shared.module';
import { UsersModalWindowComponent } from './components/users-modal-window/users-modal-window.component';
import { UsersFilterService } from './services/users-filter.service';
import { UsersHTTPService } from "./services/users-http.service";



@NgModule({
  declarations: [UsersPageComponent, UsersModalWindowComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ UsersPageComponent ],
  providers: [ UsersFilterService, UsersHTTPService ]
})
export class UsersListModule { }
