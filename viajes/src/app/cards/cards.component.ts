import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  card: Card = {
    precio: 30,
    ciudad: 'Barcelona',
    img: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-1388030.jpg&fm=jpg'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
