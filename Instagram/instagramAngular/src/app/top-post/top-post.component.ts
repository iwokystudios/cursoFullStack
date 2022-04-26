import { Component, OnInit } from '@angular/core';

import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import { UserE } from '../perfilesExternos';

@Component({
  selector: 'app-top-post',
  templateUrl: './top-post.component.html',
  styleUrls: ['./top-post.component.scss']
})
export class TopPostComponent implements OnInit {
  faEllipsis = faEllipsis
  userE: UserE = {
    perfil: 'raphtalia',
    img: 'https://i.pinimg.com/564x/87/35/60/8735602e5dd96beaa0e0af8401cc7821.jpg'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
