import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonHandlerComponent } from './button-handler/button-handler.component';
import { ContentControlComponent } from './content-control/content-control.component';
import { HomeComponent } from './home/home.component';

import { DataManagerService } from './services/data-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentControlComponent,
    ButtonHandlerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
