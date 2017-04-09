import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/**
import { MdCard, MdCardContent, MdCardSubtitle, MdCardTitle } from '@angular2-material/card';
import { MdToolbar, MdToolbarRow } from '@angular2-material/toolbar';
import { MdSidenav, MdSidenavLayout } from '@angular2-material/sidenav';
import { MdList, MdListItem } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdSpinner } from '@angular2-material/progress-circle';


import { MdCard, MdCardContent, MdCardSubtitle, MdCardTitle } from '@angular/material';
import { MdToolbar, MdToolbarRow } from '@angular/material';
//import { MdSidenav, MdSidenavLayout } from '@angular/material';
import { MdSidenav, MdSidenavContainer } from '@angular/material';
import { MdList, MdListItem } from '@angular/material';
import { MdButton } from '@angular/material';
import { MdButtonModule } from '@angular/material';
//import { MdInput } from '@angular/material';
import { MdInputContainer } from '@angular/material';
//import { MdRippleModule } from '@angular/material';

import { MdIcon, MdIconRegistry } from '@angular/material';
import { MdSpinner } from '@angular/material';
*/

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HomeRootComponentGuard } from './home-root/home-root.guard';
import { UnauthenticatedGuard } from './unauthenticated.guard';

import { UserBadgeComponent } from './users/user-badge.component';
import { QuickCardComponent } from './shared/components/quick-card/quick-card.component';

import { UserService } from './shared/services/user/user.service';
import { HeroService } from './shared/services/hero/hero.service';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    
    MaterialModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    HeroDetailComponent,
    HeroesComponent,
    UsersComponent,
    UserBadgeComponent,
    QuickCardComponent,
    UserDetailComponent,
 /**
    MdCard,
    MdCardContent,
    //MdInput,
    MdInputContainer,
    MdCardSubtitle,
    MdCardTitle,
    MdToolbar,
    MdToolbarRow,
    MdSidenav,
    //MdSidenavLayout,
    MdSidenavContainer,
    MdList,
    MdListItem,
    MdButton,
    MdIcon,
    MdSpinner,
    //MdRippleModule
   */
    
  ],
  providers: [HomeRootComponentGuard,
              UnauthenticatedGuard,
              //MdIconRegistry,
              HeroService,
              UserService,
              HeroService,
              {provide: 'apiBase', useValue: 'http://192.168.29.128:5000'}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
