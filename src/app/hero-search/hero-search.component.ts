import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs/index";
import {Hero} from "../model/hero";
import {HeroService} from "../heroe.service";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/internal/operators";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  private searchTerms = new Subject<String>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

  searchHeroes(term: string): void {
    this.searchTerms.next(term);
  }

}
