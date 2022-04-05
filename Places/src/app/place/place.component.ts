import { Component, OnInit } from '@angular/core';
import { Place } from 'src/model/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./heroes.component.css']
})
export class places implements OnInit {
  place: Place = {
    preu: 1,
    name: 'Windstorm'
    imagen:"";
  };

  constructor() { }

  ngOnInit(): void {
  }

}

}
