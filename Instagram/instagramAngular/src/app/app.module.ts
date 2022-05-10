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
import { ImgPerfilComponent } from './img-perfil/img-perfil.component';
import { TopPostComponent } from './top-post/top-post.component';
import { FotoPostComponent } from './foto-post/foto-post.component';
import { ComentsPostComponent } from './coments-post/coments-post.component';
import { MenuPerfilComponent } from './menu-perfil/menu-perfil.component';
import { ListPostComponent } from './list-post/list-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoriesBarComponent,
    PostsComponent,
    HintsComponent,
    MenuIconosComponent,
    BuscadorComponent,
    HistorieComponent,
    ImgPerfilComponent,
    TopPostComponent,
    FotoPostComponent,
    ComentsPostComponent,
    MenuPerfilComponent,
    ListPostComponent
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
