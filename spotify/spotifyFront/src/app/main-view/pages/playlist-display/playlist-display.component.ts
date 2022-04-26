import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/models/playlist';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-playlist-display',
  templateUrl: './playlist-display.component.html',
  styleUrls: ['./playlist-display.component.scss']
})

export class PlaylistDisplayComponent implements OnInit {

  // playlist?: Playlist;
  playlist$!: Observable<Playlist>;

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) { }

  ngOnInit(): void {
    // this.getPlaylist();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.playlist$ = this.playlistService.getPlaylist(id)
  }

  // getPlaylist(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.playlistService.getPlaylist(id)
  //     .subscribe(playlist => this.playlist = playlist)
    
  // }


}
  
