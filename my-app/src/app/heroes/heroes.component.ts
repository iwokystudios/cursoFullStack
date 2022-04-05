import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/mocks/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero = HEROES;
  // selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

}
