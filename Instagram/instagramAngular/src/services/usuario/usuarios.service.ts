import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Usuario } from 'src/model/usuario';
import { api } from '../api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  usuarios: Usuario[] = [];

  constructor(private http: HttpClient) { }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(api.usuario + "/" + id);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(api.usuario);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(api.usuario, usuario, httpOptions);
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(api.usuario + "/" + usuario.id, usuario, httpOptions);
  }

}
