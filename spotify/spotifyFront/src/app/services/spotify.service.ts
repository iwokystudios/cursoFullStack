import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  public credentials = {
    clientID: 'e4d048ac35cc482a865693a49264bb58',
    clientSecret: '354a8202a9f44f5fb2ee8e6d74a8662f',
    accessToken: '',
  };

  public poolURls = {

    authorize: 'https://accounts.spotify.com/es-ES/authorize?client_id=' + 
      this.credentials.clientID + '&response_type=token' + 
      '&redirect_url=' + encodeURIComponent('http://localhost:4200/callback') +
      '&expires_in=3600',
    refreshAccessToken: 'https://accounts.spotify.com/api/token'
  };


  constructor(private http : HttpClient ) { 
    this.updateToken();
  }

  updateToken() {
    this.credentials.accessToken = sessionStorage.getItem('token') || '';
  }

  getQuery(query: String) {

    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADER = {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.credentials.accessToken})}

    return this.http.get(URL, HEADER)
  }

  checkTokenSpoLogin(){
    this.checkTokenSpo() || (sessionStorage.setItem('refererURL', location.href), window.location.href = this.poolURls.authorize )
  }

  checkTokenSpo() {
    return !!this.credentials.accessToken;
  }

  tokenRefreshURL() {
    
    this.checkTokenSpo() && alert('Expiro la sesion');

    this.credentials.accessToken = '';
    sessionStorage.removeItem('token');
    this.checkTokenSpoLogin()
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map( (data: any) => data.albums.items));
  }

  getFeaturedPlaylists() {
    return this.getQuery('browse/featured-playlists')
      .pipe(map( (data: any) => data.playlists.items));
  }

  getArtistas(termino: string) {

      return this.getQuery(`search?q=${ termino }&type-artist&limit=15`)
        .pipe(map( (data: any) => {
          return data.artists.items;
        }));
  }

  getPlaylist(id: string) {
    return this.getQuery(`playlists/${id}`)
  }




}
