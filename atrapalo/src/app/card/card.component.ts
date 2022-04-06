import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/models/city';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() city?: City;

  constructor() { }

  ngOnInit(): void {
  }

}
