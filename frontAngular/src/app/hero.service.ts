import { Injectable } from '@angular/core';
import { Hero } from 'src/model/hero';
import { HEROES } from 'src/mocks/mocks-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl = 'http://localhost:3000/heroes';  // URL to web api
  

  constructor(
    private http: HttpClient,
    private messageService: MessageService,

    ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const url = `${this.heroesUrl}/${id}`;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(url)
  }
}
