import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../model/hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../heroe.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
  styleUrls: ['./heroe-details.component.css']
})
export class HeroeDetailsComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getBack(): void {
    this.location.back();
  }

  saveHero(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.getBack());
  }


}
