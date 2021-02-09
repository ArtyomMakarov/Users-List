import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UsersListModule } from './users-list/users-list.module';
import { HeaderFilterParamsService } from './core/services/header-filter-params.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UsersListModule,
    HttpClientModule
  ],
  providers: [HeaderFilterParamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
