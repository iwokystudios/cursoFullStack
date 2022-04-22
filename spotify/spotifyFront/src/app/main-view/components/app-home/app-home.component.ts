import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/albums.service';
import { Album } from 'src/models/album';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  albums: Album[] = [];

  // nuevaMusica: any[] = [];
  // nuevaPlaylists: any[] = [];
  // loading: boolean;

  // error: boolean = false;
  // mensajeError?: string;
  // mensajeErrorPlaylist?: string;

  constructor(private albumService: AlbumService) {

    // this.loading = true;
    // this.spotify.getNewReleases()
    //   .subscribe((data: any) => {
    //     this.nuevaMusica = data
    //     this.loading = false;
    //   }, (errorServicio) => {
    //     this.loading = false;
    //     this.error = true;
    //     this.mensajeError = errorServicio.error.error.message;
    //     console.log(errorServicio);
    //   });

    // this.spotify.getFeaturedPlaylists()
    //   .subscribe((data:any) => {
    //     this.nuevaPlaylists = data
    //     console.log(data)
    //     this.loading = false;
    //   }, (errorServicio) => {
    //     this.loading = false;
    //     this.error = true;
    //     this.mensajeErrorPlaylist = errorServicio.error.error.message;
    //     console.log(errorServicio);
    //   });

   }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAlbums()
      .subscribe(albums => this.albums = albums)
  }

}


