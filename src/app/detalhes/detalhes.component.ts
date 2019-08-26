import { Component, OnInit, Input, NgZone} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClienteService } from 'app/services/cliente.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { observe } from "rxjs-observe";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  @Input() clientDetail: any = null;
  notaForm: FormGroup;

  razaoSocial: String = '';
  numeroNota: Number = 0;
  dataNota: any;
  formaPagamento: String = '';
  valor: Number = 0;

  message;

  pagamentos: Array<any> = [{nome: 'Cartão de crédito'}, {nome: 'Boleto'}]

  date: { year: number, month: number };
  model: NgbDateStruct;

  notas: Array<any> = [];

  points;

  
  constructor(private fb: FormBuilder, private clienteService: ClienteService, private zone: NgZone) { }
  
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
    this.clienteService.currentMessage.subscribe(message => {
      this.message = message;
      console.log(message);
      if(message['codigo']) {
        this.clienteService.getPoints().subscribe(points => this.points = points);
      }
    })

    this.notaForm = this.fb.group({
      razaoControl: new FormControl(),
      numeroControl: new FormControl(),
      dataControl: new FormControl(),
      pagamentoControl: new FormControl(),
      valorControl: new FormControl()
    });
  }

  cadastrar() {
    let obj = Object.assign({}, this.notaForm.value);
    console.log(obj)
    console.log(this.clientDetail)

    this.notas.push(obj);
  }

}
