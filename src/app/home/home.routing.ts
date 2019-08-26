import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteResolverService } from '../resolvers/cliente-resolver.service';
import { DetalhesComponent } from 'app/detalhes/detalhes.component';

const routes: Routes = [
    { path: '',     component: DetalhesComponent, resolve: {
      cliente: ClienteResolverService
    } },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
})
export class HomeRoutingModule { }
