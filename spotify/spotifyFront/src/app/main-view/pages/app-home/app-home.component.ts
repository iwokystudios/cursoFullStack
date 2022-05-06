import { Component, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CollectionService } from 'src/app/services/collection.service';
import { Collection } from 'src/models/collecion';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  @Output() collections: Collection[] = [];

  constructor(private collectionService: CollectionService) {

   }

  ngOnInit(): void {
    // this.getHomeCollection(1);
    this.getCollections();
  }

  getHomeCollection(user_id: number): void {
    this.collectionService.getHomeCollection(user_id)
      .subscribe(collections => this.collections = collections)
  }

  getCollections(): void {
    this.collectionService.getCollections()
      .subscribe(collections => this.collections = collections);
    console.log("hola");
  }

}




// Spotify API Video

  // nuevaMusica: any[] = [];
  // nuevaPlaylists: any[] = [];
  // loading: boolean;

  // error: boolean = false;
  // mensajeError?: string;
  // mensajeErrorPlaylist?: string;


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