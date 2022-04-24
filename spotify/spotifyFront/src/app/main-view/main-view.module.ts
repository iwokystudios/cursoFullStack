import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppTopMenuComponent } from './components/app-top-menu/app-top-menu.component';
import { MainViewRoutingModule } from './main-view-routing.module';
import { CoreModule } from '../core/core.module';
import { CardDisplayComponent } from './components/card-display/card-display.component';
import { PlaylistDisplayComponent } from './components/playlist-display/playlist-display.component';
import { AlbumDisplayComponent } from './components/album-display/album-display.component';
import { ArtistDisplayComponent } from './components/artist-display/artist-display.component';
import { SongDisplayComponent } from './components/song-display/song-display.component';



@NgModule({
  declarations: [
    MainViewComponent,
    AppHomeComponent,
    AppTopMenuComponent,
    CardDisplayComponent,
    PlaylistDisplayComponent,
    AlbumDisplayComponent,
    ArtistDisplayComponent,
    SongDisplayComponent
  ],
  imports: [
    CommonModule,
    MainViewRoutingModule,
    CoreModule
  ],
  exports: [
    MainViewComponent
  ]
})
export class MainViewModule { }
