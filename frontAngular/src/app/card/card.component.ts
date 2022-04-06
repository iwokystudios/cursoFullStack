import { Component, OnInit } from '@angular/core';
import { viaje } from 'src/model/viaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card?: viaje;
  constructor() { }

  ngOnInit(): void {
  }

}
