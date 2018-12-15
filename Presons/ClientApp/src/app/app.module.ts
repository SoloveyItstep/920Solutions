import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { DateInputsModule, DatePickerModule, CalendarsModule, CalendarModule } from '@progress/kendo-angular-dateinputs';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HttpService } from './services/HttpService';
import { RouteService } from './route/route.service';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    BrowserAnimationsModule,
    DateInputsModule,
    DatePickerModule,
    CalendarsModule,
    CalendarModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'add', component: AddComponent }
    ])
  ],
  providers: [HttpService, HttpClient, RouteService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
