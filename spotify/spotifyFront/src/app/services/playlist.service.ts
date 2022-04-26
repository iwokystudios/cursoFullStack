import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Playlist } from 'src/models/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlistUrl = 'http://localhost:4000/api/playlists';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Normal Playlist

  // Popular new releases
  getNewReleases(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.playlistUrl)
      .pipe(
        tap( () => this.log('Fetched New releases')),
        catchError(this.handleError<Playlist[]>('getNewReleases', []))
      );
  };

  getPlaylist(id: number): Observable<Playlist> {
    const url = `${this.playlistUrl}/${id}`
    return this.http.get<Playlist>(url)
      .pipe(
        tap( () => this.log('Fetched Playlist')),
        catchError(this.handleError<Playlist>('getNewReleases'))
      );
  };

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.playlistUrl)
      .pipe(
        tap( () => this.log('Fetched Playlists')),
        catchError(this.handleError<Playlist[]>('getNewReleases', []))
      );
  };

  

  // getTrendingNow() {};

  // User Playlist

  // Jump back in
  // Recently played

  // getRecentlyPlayed() {};

  // Suggested Artists
  // Your top mixes
  // More of what you like 
  // Popular artists
  // Your shows 

  // Pop all day
  // Popular albums
  // A playlist for every moment

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);                 
    };
  };

  private log(message: string) {
    console.log(`PlaylistService: ${message}`);
  };


}
