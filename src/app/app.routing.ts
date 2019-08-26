import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'detalhes',     loadChildren: loadSessionHomeModule },
    // { path: 'eventos',     component: ProfileComponent },
    // { path: 'grapper',           component: SignupComponent },
    // { path: 'noticias',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export function loadSessionHomeModule() {
  return HomeModule
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
