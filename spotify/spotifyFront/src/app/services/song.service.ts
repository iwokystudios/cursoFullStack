import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from 'src/models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songsUrl = 'http://localhost:4000/api/songs';
  private albumsUrl = 'http://localhost:4000/api/albums';
  private artistsUrl = 'http://localhost:4000/api/artists';
  private playlistsUrl = 'http://localhost:4000/api/playlists';

  constructor(private http: HttpClient) { }

  getSong(id: number): Observable<Song> {
    const url = `${this.songsUrl}/${id}`;
    return this.http.get<Song>(url);
  };

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl);
  };

  getSongsFromAlbum(id: number): Observable<Song[]> {
    const url = `${this.albumsUrl}/${id}/songs`;
    return this.http.get<Song[]>(url);
  }

  getSongsFromArtist(id: number): Observable<Song[]> {
    const url = `${this.artistsUrl}/${id}/songs`;
    return this.http.get<Song[]>(url);
  }

  getSongsFromPlaylist(id: number): Observable<Song[]> {
    const url = `${this.playlistsUrl}/${id}/songs`;
    return this.http.get<Song[]>(url);
  }


}
