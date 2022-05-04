import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-top-menu',
  templateUrl: './app-top-menu.component.html',
  styleUrls: ['./app-top-menu.component.scss']
})
export class AppTopMenuComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
  goForward(): void {
    this.location.forward();
  }

}
