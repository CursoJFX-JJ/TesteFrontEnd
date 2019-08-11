import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { TaxaAnualComponent } from './taxa-anual/taxa-anual.component';
import { TaxaAnualResolverService } from './resolvers/taxa-anual-resolver.service';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'taxaAnual/:ano',    component: TaxaAnualComponent, resolve: {
      calculo: TaxaAnualResolverService
    } },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
