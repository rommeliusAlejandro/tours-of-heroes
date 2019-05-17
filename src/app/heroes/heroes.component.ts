import {Component, OnInit} from '@angular/core';
import {HeroService} from "../heroe.service";
import {Hero} from "../model/hero";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  private webSocketUrl = 'http://localhost:9090/socket';
  private stompClient;

  constructor(private heroesService: HeroService) {
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  addHero(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    this.heroesService.addHero({name} as Hero).subscribe();
  }

  deleteHero(hero: Hero): void {
    this.heroesService.deleteHero(hero)
      .subscribe();
  }

  initializeWebSocketConnection() {
    let ws = new SockJS(this.webSocketUrl);

    this.stompClient = Stomp.over(ws);

    let self = this;

    self.stompClient.connect({}, function (frame) {
      self.stompClient.subscribe("/heroSocket", (message) => {

        if (message) {

          let body = JSON.parse(message.body);

          if ("CREATE" === body.command) {
            self.heroes.unshift(body.hero as Hero);
            return;
          }

          if ("DELETE" === body.command) {
            self.heroes = self.heroes.filter(h => h.id != body.hero.id);
            return;
          }

          if ("UPDATE" === body.command) {
            let hero = self.heroes.find(h => h.id === body.hero.id);
            let i = self.heroes.indexOf(hero);
            self.heroes[i] = body.hero;
            return;
          }
        }
      });
    });

  }

}
