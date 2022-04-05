import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/mocks/mock-heroes';
<<<<<<< HEAD
=======
import { Hero } from 'src/model/hero';
>>>>>>> 5864f9d7fe33aaf4d3ae8fb87043147c73420d99


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
<<<<<<< HEAD
    heroes = HEROES; 
    selectedHero?: Hero;
=======
  laListaDeHeroes = HEROES;
  selectedHero?: Hero;
>>>>>>> 5864f9d7fe33aaf4d3ae8fb87043147c73420d99

  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
  } 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
=======
  }

  onSelect(dory: Hero): void {
    this.selectedHero = dory;
>>>>>>> 5864f9d7fe33aaf4d3ae8fb87043147c73420d99
  }

}
