import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CocktailService} from "./services/cocktail.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CocktailDialogComponent } from './cocktail-dialog/cocktail-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    CocktailDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [
    CocktailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
