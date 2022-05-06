import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Song } from 'src/models/song';

@Component({
  selector: 'app-playing-bar',
  templateUrl: './playing-bar.component.html',
  styleUrls: ['./playing-bar.component.scss']
})
export class PlayingBarComponent implements OnInit {

  playingList: Song[] = [{    
    id : 0,
    song_name : "Ejemplo",
    artist_id : 0,
    album_id : 0,
    song_description : "best cancion",
    song_length : 300,
    song_url : "",
    song_img : "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
  }];

  songPlaying: Song = this.playingList[0];
  songAudio = new Audio;

  

  constructor(private playerService: PlayerService) { 
    
  }

  ngOnInit(): void {
    this.playerService.playingList.subscribe((value) => {
      this.playingList = value;
      // console.log(value);
      // console.log(this.playingList);
      this.songPlaying = this.playingList[0];
      console.log(this.songPlaying);
      // console.log("playing-bar change")
      this.songAudio.pause();
      this.songAudio.src = this.songPlaying.song_url;
      this.songAudio.play();
    }
    );
  }

  audioPlayStop() {
    if (!this.songAudio.paused) {
      this.songAudio.pause();
    } else {
      this.songAudio.play();
    }
  }

  nextSong() {
    console.log("play")
  };
  prevSong() {};


}
