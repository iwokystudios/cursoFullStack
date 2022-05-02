import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/models/playlist';
import { Song } from 'src/models/song';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent implements OnInit {

  @Input() playlist!: Playlist;
  songs?: Song[];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.getPlaylistSongs();
  }

  getPlaylistSongs(): void{
    const id = this.playlist?.id;
    this.playlistService.getPlaylistSongs(id)
      .subscribe(songs => this.songs = songs[1]);
  }

}
