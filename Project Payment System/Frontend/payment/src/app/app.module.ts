import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchdataService } from './service/fetchdata.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchdataService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent,FetchdataService]
})
export class AppModule { }
