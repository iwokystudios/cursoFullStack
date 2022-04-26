import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from 'src/app/services/artists.service';
import { Artist } from 'src/models/artist';
import { Collection } from 'src/models/collecion';

@Component({
  selector: 'app-artist-display',
  templateUrl: './artist-display.component.html',
  styleUrls: ['./artist-display.component.scss']
})
export class ArtistDisplayComponent implements OnInit {

  @Input() artist?: Artist;
  collections: Collection[] = [];

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService
  ) { }

  ngOnInit(): void {
    this.getArtist();
  }

  getArtist(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artistService.getArtist(id)
      .subscribe(artist => this.artist = artist);
  }

}