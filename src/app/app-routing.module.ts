
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';


import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';

//import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OuterNavComponent } from './outer-nav/outer-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarListComponent } from './dashboard/cars/car-list/car-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { CarsComponent } from './dashboard/cars/cars.component';
import { CarDetailComponent } from './dashboard/cars/car-detail/car-detail.component';
import { CarFormComponent } from './dashboard/cars/car-form/car-form.component';
import { AuthguardGuard } from './authguard.guard';
import { AnonymousguardGuard } from './anonymousguard.guard';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { MinuteDetailsComponent } from './dashboard/minute-details/minute-details.component';


const appRoutes:Routes=[
  
  { path:'',component:AboutUsComponent }, //canActivate:[AnonymousguardGuard],

  { path:'login',component:LoginComponent},//canActivate:[AnonymousguardGuard],

  { path:'register',component:RegistrationComponent },
  
  {
      path:'dashboard',
      //canActivate:[AuthguardGuard],
      component:DashboardComponent,
      children: 
      [
        { path: 'profile', component: ProfileComponent },  
        { path: 'customer', component: CustomerComponent }, 
        { path: 'car-details', component: MinuteDetailsComponent }, 
        { 
          path: 'cars', 
          component: CarsComponent, 
          children:
          [
            { path: 'carlist',component:CarListComponent },
            { path: 'view/:id',component: CarDetailComponent },
            { path: 'edit/:id',component: CarFormComponent },
            { path: 'new',component: CarFormComponent }
          ] 
        },
        
        { path: 'users', component: UsersComponent }
       
      ]
  },
 
  { path:'**',component:NotFoundComponent }
 
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]             
  })

export class AppRoutingModule {}
