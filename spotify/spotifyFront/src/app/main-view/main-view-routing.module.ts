import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { SongDisplayComponent } from './components/song-display/song-display.component';
import { AlbumDisplayComponent } from './components/album-display/album-display.component';
import { ArtistDisplayComponent } from './components/artist-display/artist-display.component';
import { PlaylistDisplayComponent } from './components/playlist-display/playlist-display.component';
// import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home' , component: AppHomeComponent},
  { path: 'songs/:id' , component: SongDisplayComponent },
  { path: 'albums/:id' , component: AlbumDisplayComponent },
  { path: 'artists/:id' , component: ArtistDisplayComponent },
  { path: 'playlists/:id' , component: PlaylistDisplayComponent },
  { path: 'collections/:id' , component: PlaylistDisplayComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class MainViewRoutingModule { }
