import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppTopMenuComponent } from './components/app-top-menu/app-top-menu.component';
import { MainViewRoutingModule } from './main-view-routing.module';
import { CoreModule } from '../core/core.module';
import { CardDisplayComponent } from './components/card-display/card-display.component';
import { PlaylistDisplayComponent } from './pages/playlist-display/playlist-display.component';
import { AlbumDisplayComponent } from './pages/album-display/album-display.component';
import { ArtistDisplayComponent } from './pages/artist-display/artist-display.component';
import { SongDisplayComponent } from './pages/song-display/song-display.component';
import { CardComponent } from './components/card/card.component';
import { TableDisplayComponent } from './components/table-display/table-display.component';
import { TableRowComponent } from './components/table-row/table-row.component';



@NgModule({
  declarations: [
    MainViewComponent,
    AppHomeComponent,
    AppTopMenuComponent,
    CardDisplayComponent,
    PlaylistDisplayComponent,
    AlbumDisplayComponent,
    ArtistDisplayComponent,
    SongDisplayComponent,
    CardComponent,
    TableDisplayComponent,
    TableRowComponent
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
