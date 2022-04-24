import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, of } from 'rxjs';
import { Album } from 'src/models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumsUrl = 'http://localhost:4000/api/albums';
  private artistsUrl = 'http://localhost:4000/api/artists';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Normal Playlist

  // Popular new releases
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl)
      // .pipe(
      //   tap( () => this.log('Fetched New releases')),
      //   catchError(this.handleError<Album[]>('getNewReleases', []))
      // );
  };

  getAlbum(id: number): Observable<Album> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.get<Album>(url);
  };

  getAlbumsFromArtist(id: number): Observable<Album[]> {
    const url = `${this.artistsUrl}/${id}/songs`;
    return this.http.get<Album[]>(url);
  }





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
    console.log(`AlbumService: ${message}`);
  };


}