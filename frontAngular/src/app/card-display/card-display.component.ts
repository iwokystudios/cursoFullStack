import { Component, OnInit } from '@angular/core';
import { card}
import { CITIES } from 'src/mocks-cities';
import { City } from 'src/model/city';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
