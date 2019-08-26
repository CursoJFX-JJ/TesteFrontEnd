import { Component, OnInit, Input, Output } from '@angular/core';
import { ClienteService } from 'app/services/cliente.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output() messageEvent = new EventEmitter();;

  model = {
    left: true,
    middle: false,
    right: false
  };

  focus;
  focus1;

  clientes: Array<any> = [];
  clienteSelecionado: any = null;

  constructor(private clientService: ClienteService, private router: Router) { }

  ngOnInit() {
    this.clientService.getClientes().subscribe((c: Array<any>) => {
      for (let cliente of c) {
        this.clientes.push(cliente);
      }
    });
    this.clientService.currentMessage.subscribe(message => this.clienteSelecionado = message)

  }

  clienteDetail(cliente) {
    console.log(cliente);

    let obj = Object.assign({}, cliente);
    if (obj) {
      this.clienteSelecionado = cliente;
      this.messageEvent.emit(this.clienteSelecionado);
      this.clientService.changeMessage(cliente);
    }
  }



}
