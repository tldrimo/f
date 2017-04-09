import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/services/hero/hero';
import { HeroService } from '../shared/services/hero/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['../home-root/home-root.component.css', './heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private _heroService: HeroService,
    private _router: Router) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this._heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  CreateHeroButton(hero) {
    this._heroService.createHero(hero);
    console.log(hero);
      //.subscribe(hero => this.hero = hero);    
  }

  title = 'Tour of Heroes';
/**
  onSelect(hero: Hero) {
    if(hero == this.selectedHero) {
      //this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }


  goToDetail() {
    this._router.navigate(['/detail'], { queryParams: { id: `${this.selectedHero.id}`} });
  }
*/

  goToDetail(hero: Hero) {
    this.selectedHero = hero;
    this._router.navigate(['/detail'], { queryParams: { id: `${this.selectedHero.id}`} });
  }

/**
  map vs subscribe
  http://stackoverflow.com/questions/40985605/property-then-does-not-exist-on-type-observable
  
  taky v dashboard.component.ts

  If you want to use the Observable API directly then replace your then call with a subscribe call.
  But remember that every subscription also needs to be cancelled when your component gets destroyed.

  ngOnDestroy() {
  this.subscription.unsubscribe();
  }
*/


}
