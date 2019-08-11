import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TaxaAnualComponent } from './taxa-anual/taxa-anual.component';
import { TaxaAnualResolverService } from './resolvers/taxa-anual-resolver.service';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'taxaAnual/:ano',    component: TaxaAnualComponent, resolve: {
      calculo: TaxaAnualResolverService
    } },
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
