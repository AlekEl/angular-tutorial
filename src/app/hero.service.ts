import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  hero: Hero;
  private heroesUrl = 'api/heroes';  // URL to web api

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`Hero Service: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }
}
