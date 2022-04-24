import { Component, Input, OnInit, Output } from '@angular/core';
import { AlbumService } from 'src/app/services/albums.service';
import { ArtistService } from 'src/app/services/artists.service';
import { PlaylistService } from 'src/app/services/playlist.service';
import { SongService } from 'src/app/services/song.service';
import { Album } from 'src/models/album';
import { Artist } from 'src/models/artist';
import { Collection } from 'src/models/collecion';
import { Playlist } from 'src/models/playlist';
import { Song } from 'src/models/song';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {

  @Input() collection?: Collection;

  @Output() albums: Album[] = [];
  @Output() artists: Artist[] = [];
  @Output() playlists: Playlist[] = [];
  @Output() songs: Song[] = [];

  constructor(

    private albumService: AlbumService,
    private playlistService: PlaylistService,
    private artistService: ArtistService,
    private songService: SongService,

    ) {

      }

 ngOnInit(): void {
   this.getAlbums();
   this.getArtists();
   this.getPlaylists();
   this.getSongs();
 }

 getAlbums(): void {
   this.albumService.getAlbums()
     .subscribe(albums => this.albums = albums)
 }

 getArtists(): void {
  this.artistService.getArtists()
    .subscribe(artists => this.artists = artists)
}

getPlaylists(): void {
  this.playlistService.getPlaylists()
    .subscribe(playlists => this.playlists = playlists)
}

getSongs(): void {
  this.songService.getSongs()
    .subscribe(songs => this.songs = songs)
}

}
