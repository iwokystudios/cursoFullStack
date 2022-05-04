import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/models/playlist';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  playlists?: Playlist[];

  constructor(private router: Router, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.getPlaylists();
  }

  home() {
    this.router.navigate(["/home"]);
  }

  getPlaylists(): void{
    this.playlistService.getPlaylists().subscribe( playlists => this.playlists = playlists);
  }

}
