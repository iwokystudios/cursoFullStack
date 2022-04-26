import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, of } from 'rxjs';
import { Collection } from 'src/models/collecion';
import { Playlist } from 'src/models/playlist';

@Injectable({
  providedIn: 'root'
})

export class CollectionService {

  private collectionsUrl = 'http://localhost:4000/api/collections';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Normal Playlist

  // Popular new releases
  getHomeCollection(userId: number): Observable<Collection[]> {
    const url = `${this.collectionsUrl}/home/${userId}`;
    return this.http.get<Collection[]>(url)
      // .pipe(
      //   tap( () => this.log('Fetched New releases')),
      //   catchError(this.handleError<Album[]>('getNewReleases', []))
      // );
  };

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.collectionsUrl)
  };

  getCollectionPlaylists(id: number): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${this.collectionsUrl}/${id}/playlists`)
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
        console.log(`AlbumService: ${message}`);
      };

}
