import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() card?: Card = {
    "ciudad" : "string",
    "precio" : "number",
    "img" : "string"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
