import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ComponentFactoryResolver } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';


import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OuterNavComponent } from './outer-nav/outer-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarListComponent } from './dashboard/cars/car-list/car-list.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { UsersComponent } from './dashboard/users/users.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { CarsComponent } from './dashboard/cars/cars.component';
import { CarFormComponent } from './dashboard/cars/car-form/car-form.component';

import { CarsService } from './services/cars.service';
import { UrlService } from './services/url.service';
import { CarDetailComponent } from './dashboard/cars/car-detail/car-detail.component';
import { UsersService } from './services/users.service';
import { AuthguardGuard } from './authguard.guard';
import { AnonymousguardGuard } from './anonymousguard.guard';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DashboardMenubarComponent } from './dashboard/dashboard-menubar/dashboard-menubar.component';
import { TabsModule,CollapseModule,BsDatepickerModule } from 'ngx-bootstrap';
//import '../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css';
import { DatePipe } from '@angular/common';
import { CarSpecificationComponent } from './cars/car-specification/car-specification.component';
import { CarDetailSpecificationComponent } from './cars/dashboard/car-detail-specification/car-detail-specification.component';
import { CarSpecificationDetailsComponent } from './dashboard/cars/car-specification-details/car-specification-details.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { AddressComponent } from './dashboard/address/address.component';
import { ImageuploaderComponent } from './dashboard/imageuploader/imageuploader.component';
import { CustomerService } from './services/customer.service';
import { MinuteDetailsComponent } from './dashboard/minute-details/minute-details.component';
import { DetailComponentComponent } from './dashboard/detail-component/detail-component.component';
import { SearchCarsPipe } from './pipes/search-cars.pipe';
import { CarDetailsService } from './services/car-details.service';

//import { BsDropdownModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AboutUsComponent,
    OuterNavComponent,
    NotFoundComponent,
    CarListComponent,
    DashboardComponent,
    SideBarComponent,
    UsersComponent,
    ProfileComponent,
    CarsComponent,
    CarFormComponent,
    CarDetailComponent,
    DashboardMenubarComponent,
    CarSpecificationComponent,
    CarDetailSpecificationComponent,
    CarSpecificationDetailsComponent,
    CustomerComponent,
    AddressComponent,
    ImageuploaderComponent,
    MinuteDetailsComponent,
    DetailComponentComponent,
    SearchCarsPipe
  ],
  entryComponents: [
    CarSpecificationDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),TabsModule.forRoot(),CollapseModule.forRoot(),BsDatepickerModule.forRoot()
  ],
  //entryComponents: [DialogResultExampleDialog],
  providers: [CarsService,UrlService,UsersService,AuthguardGuard,AnonymousguardGuard,DatePipe,CustomerService,CarDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
