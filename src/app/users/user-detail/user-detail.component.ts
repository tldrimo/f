/**
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../shared/services/user/user';
import { UserService } from '../../shared/services/user/user.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  inputs: ['user']
})

export class UserDetailComponent implements OnInit, OnDestroy {
  selectedId: number;
  user: User;
  sub: Subscription;

  constructor(private _userService: UserService, private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this._activatedRoute
      .queryParams
      .subscribe(params => {
        this.selectedId = +params['id'];

//        implementovat metodu getUser(id)
//        this._userService.getUsers(this.selectedId)

        this._userService.getUser(this.selectedId)
          .subscribe(user => this.user = user);
      });
  }

  goBack() {
    window.history.back();
  }

/**
  saveData(user) {
    console.log("saveData");
    this._userService.updateUser(user);
  }
*/

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  title = 'Hero Detail Component'
}