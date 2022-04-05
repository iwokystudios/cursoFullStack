import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/model/hero';

<<<<<<< HEAD
=======

>>>>>>> main
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

<<<<<<< HEAD
  @Input() hero?: Hero;

=======
  @Input() elHeroeQueMePasan?: Hero;
  
>>>>>>> main
  constructor() { }

  ngOnInit(): void {
  }

}
