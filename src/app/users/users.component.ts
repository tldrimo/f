import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/services/user/user';
import { UserService } from '../shared/services/user/user.service';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['../home-root/home-root.component.css', './users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(users => this.users = users);
  }

  onSelect(user: User) {
    if(user == this.selectedUser) {
      //this.selectedHero = undefined;
      
    } else {
      this.selectedUser = user;
      this._router.navigate(['/user-detail'], { queryParams: { id: `${this.selectedUser.id}`} });

    }
  }

  title = 'Users Component';

//  goToUserDetail() {
//    this._router.navigate(['/user-detail'], { queryParams: { id: `${this.selectedUser.id}`} });
//  }

}
