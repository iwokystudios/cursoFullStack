import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/model/hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: 'src/app/hero-detail/hero-detail.component.html',
  styleUrls: ['./hero-detail.componetnt.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() elHeroeQueMePasan?: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

}