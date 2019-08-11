import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TaxaAnualComponent } from '../taxa-anual/taxa-anual.component';
import { TaxaMensalComponent } from '../taxa-mensal/taxa-mensal.component';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        ComponentsModule,
    ],
    declarations: [ HomeComponent,
        TaxaAnualComponent,
        TaxaMensalComponent,
    ],
    exports: [ HomeComponent ],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomeModule { }
