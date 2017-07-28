import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Hero } from '../../models/hero';

@Injectable()
export class HeroService {

  HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return Observable.of(this.HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return this.getHeroes().map(heroes => heroes.find(hero => hero.id === +id));
  }

}
