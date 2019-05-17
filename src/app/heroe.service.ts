import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from "./model/hero";
import {MessagesService} from "./messages.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'http://localhost:9090/heroes';

  constructor(private messagesService: MessagesService,
              private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.addMessage('List of heroes has been fetch');
    return this.http.get<Hero[]>(this.heroesUrl, httpOptions)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    this.messagesService.addMessage(`HeroService: fetched hero id=${id}`);

    const heroUrl = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(heroUrl).pipe(
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {

    return this.http.post(this.heroesUrl, hero, httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const id = hero.id;
    const heroUrl = `${this.heroesUrl}/${id}`;

    return this.http.post<Hero>(heroUrl, httpOptions).pipe(
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(error.message);

      return of(result as T);
    };
  }
}
