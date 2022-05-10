import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../perfilUsuario';
import { UserE } from '../perfilesExternos';

@Component({
  selector: 'img-perfil',
  templateUrl: './img-perfil.component.html',
  styleUrls: ['./img-perfil.component.scss']
})
export class ImgPerfilComponent implements OnInit {
  user: User = {
    perfil: 'zagp_impact',
    img: 'https://www.hdwallpaper.nu/wp-content/uploads/2020/07/persona_4-7.png'
  }
  userE: UserE = {
    perfil: 'raphtalia',
    img: 'https://i.pinimg.com/564x/87/35/60/8735602e5dd96beaa0e0af8401cc7821.jpg'
  }
  
  @Output() onPress = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
		this.onPress.emit();
	}
}
