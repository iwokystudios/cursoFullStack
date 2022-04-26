import { Component, OnInit } from '@angular/core';

import { faGear, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

import { faCircleUser, faBookmark} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-menu-perfil',
  templateUrl: './menu-perfil.component.html',
  styleUrls: ['./menu-perfil.component.scss']
})
export class MenuPerfilComponent implements OnInit {
  faCircleUser = faCircleUser
  faGear = faGear
  faArrowsRotate = faArrowsRotate
  faBookmark = faBookmark
  constructor() { }

  ngOnInit(): void {
  }

}
