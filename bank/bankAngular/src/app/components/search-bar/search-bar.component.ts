import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
  goForward(): void {
    this.location.forward();
  }

}
