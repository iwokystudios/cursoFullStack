import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Artist } from 'src/models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private artistUrl = 'http://localhost:4000/api/artists';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // // Normal Playlist

  // // Popular new releases
  // getNewReleases(): Observable<Artists[]> {
  //   return this.http.get<Artists[]>(this.playlistUrl)
  //     .pipe(
  //       tap( () => this.log('Fetched New releases')),
  //       catchError(this.handleError<Artists[]>('getNewReleases', []))
  //     );
  // };

  // getPlaylist(id: number): Observable<Playlist[]> {
  //   const url = `${this.playlistUrl/${id}}`
  //   return this.http.get<Artists>(url)
  //     .pipe(
  //       tap( () => this.log('Fetched New releases')),
  //       catchError(this.handleError<Artists[]>('getNewReleases', []))
  //     );
  // };

  getArtist(id: number): Observable<Artist> {
    const url = `${this.artistUrl}/${id}`;
    return this.http.get<Artist>(url);
  };



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
    console.log(`HeroService: ${message}`);
  };


}
