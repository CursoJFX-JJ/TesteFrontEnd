import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SideMenuComponent } from 'app/sidemenu/sidemenu.component';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    clientDetail;
    @Output() messageEvent = new EventEmitter();;


    focus;
    focus1;
    constructor(public afAuth: AngularFireAuth) { }

    ngOnInit() { }

    receiveMessage($event) {
        this.messageEvent.emit($event);
        this.clientDetail = $event;
        console.log(this.clientDetail);
        
    }
}
