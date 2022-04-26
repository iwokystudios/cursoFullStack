import { Component, Input, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/models/song';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-display',
  templateUrl: './song-display.component.html',
  styleUrls: ['./song-display.component.scss']
})
export class SongDisplayComponent implements OnInit {

  @Input() song?: Song;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.getSong();
  }

  getSong(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.songService.getSong(id)
      .subscribe(song => this.song = song);
  }

}
