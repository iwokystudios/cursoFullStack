import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionService } from 'src/app/services/collection.service';
import { Collection } from 'src/models/collecion';
import { Playlist } from 'src/models/playlist';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {

  @Input() collection!: Collection;

  @Output() playlists$!: Observable<Playlist[]>;  

  constructor(
    private collectionService: CollectionService,
    ) {}

  ngOnInit(): void {
    // this.getCollectionPlaylists();
    const id = this.collection!.id;
    this.playlists$ = this.collectionService.getCollectionPlaylists(id);
  }

  // getCollectionPlaylists(): Observable<Playlist[]> {
  //   const id = this.collection?.id;
  //   this.collectionService.getCollectionPlaylists()
  //     .subscribe(playlists => this.playlists$ = playlists): Observable<Playlist[]>
  // }

}


// Subscription model

// subscriptionCollection?: Subscription;

// ngOnDestroy(): void {
//   if (this.subscriptionCollection) 
//     this.subscriptionCollection?.unsubscribe();
//  }


//  this.subscriptionCollection = this.collection$?.subscribe(collection => {

// });

