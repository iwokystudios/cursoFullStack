import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Song } from 'src/models/song';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // playingList$: Observable<Song[]>;

  // playingListChange: Subject<Song[]> = new Subject<Song[]>();

  // playingList: Song[] = [];

  playingListChange = new BehaviorSubject<Song[]>([{    
    id : 0,
    song_name : "Ejemplo",
    artist_id : 0,
    album_id : 0,
    song_description : "best cancion",
    song_length : 300,
    song_url : "",
    song_img : "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
  }]);

  playingList = this.playingListChange.asObservable();

  public playingList2 = new Subject<Song[]>();
  
  constructor() {
    // this.playingList$ = this.playingListChange.asObservable();
    // this.playingListChange.subscribe((value) => {
    //   this.playingList = value;
    // });

    
   }

  // togglePlayingList() {
  //   this.playingListChange.next(this.playingList);
  // }

  playPlaylist(playlist: Song[]) {
    this.playingListChange.next(playlist);
    // console.log("canciones añadida al service");
    // console.log(this.playingList)
    // console.log(this.playingListChange)
    // this.playingList = playlist;
  }

  playSong(playlist: Song[]) {
    // this.playingList.push(song);
    this.playingListChange.next(playlist);
  }

  addSongToPlaylist(song: Song) {
    // this.playingList.unshift(song);
  }

  clear() {
    // this.playingList = [];
  }

}
