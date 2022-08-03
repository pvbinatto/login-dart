import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './components/auth/authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSpinnerModule } from "ngx-spinner";

const MATERIAL_MODULES = [
  MatSliderModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    MATERIAL_MODULES,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
