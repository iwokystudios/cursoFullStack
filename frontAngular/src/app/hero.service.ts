import { Injectable } from '@angular/core';
import { Hero } from 'src/model/hero';
import { HEROES } from 'src/mocks/mocks-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
