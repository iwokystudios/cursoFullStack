import { Component, OnInit } from '@angular/core';

import { faHouse, faPaperPlane, faXmark, faGear, faArrowsRotate, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

import { faSquarePlus, faHeart, faCompass, faCircleUser, faBookmark} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'menu-iconos',
  templateUrl: './menu-iconos.component.html',
  styleUrls: ['./menu-iconos.component.scss']
})
export class MenuIconosComponent implements OnInit {
  faHouse = faHouse;
  faPaperPlane = faPaperPlane
  faSquarePlus = faSquarePlus
  faHeart = faHeart
  faCompass = faCompass
  faXmark = faXmark
  faCircleUser = faCircleUser
  faGear = faGear
  faArrowsRotate = faArrowsRotate
  faBookmark = faBookmark
  faCircleXmark = faCircleXmark
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}

