import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/models/playlist';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlist-display',
  templateUrl: './playlist-display.component.html',
  styleUrls: ['./playlist-display.component.scss']
})

export class PlaylistDisplayComponent implements OnInit {

  @Input() playlist?: Playlist;

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) { }

  ngOnInit(): void {
    this.getPlaylist();
  }

  getPlaylist(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.playlistService.getPlaylist(id)
      .subscribe(playlist => this.playlist = playlist);
  }

}
  
