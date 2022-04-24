import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/models/album';
import { Artist } from 'src/models/artist';
import { Playlist } from 'src/models/playlist';
import { Song } from 'src/models/song';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() album?: Album;
  @Input() artist?: Artist;
  @Input() playlist?: Playlist;
  @Input() song?: Song;
  

  constructor() { }

  ngOnInit(): void {
  }

}
