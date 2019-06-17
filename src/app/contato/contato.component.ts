import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  focus;
  focus1;

  constructor() { }

  ngOnInit() {
  }

}
