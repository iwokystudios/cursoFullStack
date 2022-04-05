import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
>>>>>>> 5864f9d7fe33aaf4d3ae8fb87043147c73420d99

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeroesComponent
=======
    HeroesComponent,
    HeroDetailComponent
>>>>>>> 5864f9d7fe33aaf4d3ae8fb87043147c73420d99
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
