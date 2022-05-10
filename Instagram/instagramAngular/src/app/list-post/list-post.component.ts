import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from 'src/model/usuario';
import { UsuariosService } from 'src/services/usuario/usuarios.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  usuarioList$: Observable<Usuario[]> = of([]);

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioList$ = this.usuariosService.getUsuarios();
  }

}
