import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    ) {}

  ngOnInit(): void {
    // this.getCollectionPlaylists();
    const id = this.collection!.id;
    this.playlists$ = this.collectionService.getCollectionPlaylists(id);
  }

  seeAll(id: number) {
    this.router.navigate(["/collections/" + id]);
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

