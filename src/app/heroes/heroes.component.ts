import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/services/hero/hero';
import { HeroService } from '../shared/services/hero/hero.service';

import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['../home-root/home-root.component.css', './heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  hero: Hero;

  constructor(
    private _service: NotificationsService,
    private _heroService: HeroService,
    private _router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  title = 'Tour of Heroes';

  public createNotification(hero: Hero) {
    this._service.success(
        'Success',
        JSON.stringify(hero),//'Some Content',
        {
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 20
        }
    )
  }

  getHeroes() {
    this._heroService.getHeroes().subscribe(data => this.heroes = data);
  }


  createHeroButton(heroName: string) {
    this.hero = { "id": null, "name": heroName };

    this._heroService.createHero(this.hero)
      .subscribe(data => this.heroes.push(data) && this.createNotification(data)
    );
    
  /**
    if(this._heroService.createHero(this.hero)
      .subscribe(data => this.heroes.push(data))
      ) this.createNotification();
   */

      //console.log(this.hero);
  }

    

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
