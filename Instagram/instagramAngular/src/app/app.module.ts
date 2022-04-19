import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriesBarComponent } from './histories-bar/histories-bar.component';
import { PostsComponent } from './posts/posts.component';
import { HintsComponent } from './hints/hints.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuIconosComponent } from './menu-iconos/menu-iconos.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HistorieComponent } from './historie/historie.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoriesBarComponent,
    PostsComponent,
    HintsComponent,
    MenuIconosComponent,
    BuscadorComponent,
    HistorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
