import { Component, OnInit } from '@angular/core';
import { link } from 'fs';
import { Place } from 'src/model/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./heroes.component.css']
})
export class places implements OnInit {
  place: Place = {
    preu: 1,
    name: 'Windstorm',
    imagen:"barcelona.png"
  };

  constructor() { }

  ngOnInit(): void {
  }

}

}
