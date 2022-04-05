import { Component, OnInit } from '@angular/core';
import { CITIES } from 'src/mocks/mocks-cities';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {
  cities = CITIES;

  constructor() { }

  ngOnInit(): void {
  }

}
