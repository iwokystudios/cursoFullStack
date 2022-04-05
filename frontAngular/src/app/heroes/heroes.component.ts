import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/mocks/mock-heroes';
import { Hero } from 'src/model/hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  laListaDeHeroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(dory: Hero): void {
    this.selectedHero = dory;
  }

}
