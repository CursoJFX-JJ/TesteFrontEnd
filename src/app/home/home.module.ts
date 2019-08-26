import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SideMenuComponent } from 'app/sidemenu/sidemenu.component';
import { HomeRoutingModule } from './home.routing';
import { DetalhesComponent } from 'app/detalhes/detalhes.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgbModule,
        RouterModule,
        HomeRoutingModule,
    ],
    declarations: [ HomeComponent, SideMenuComponent, DetalhesComponent ],
    exports: [ HomeComponent ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
