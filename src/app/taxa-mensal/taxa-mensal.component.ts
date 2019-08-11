import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelicServiceService } from 'app/services/simplic/selic-service.service';

@Component({
  selector: 'app-taxa-mensal',
  templateUrl: './taxa-mensal.component.html',
  styleUrls: ['./taxa-mensal.component.scss']
})
export class TaxaMensalComponent implements OnInit {

  anos: Array<Number> = [];
  meses: Array<any> = [
    { nome: "", valor: "0" },
    { nome: "JANEIRO", valor: "1" },
    { nome: "FEVEREIRO", valor: "2" },
    { nome: "MARÇO", valor: "3" },
    { nome: "ABRIL", valor: "4" },
    { nome: "MAIO", valor: "5" },
    { nome: "JUNHO", valor: "6" },
    { nome: "JULHO", valor: "7" },
    { nome: "AGOSTO", valor: "8" },
    { nome: "SETEMBRO", valor: "9" },
    { nome: "OUTUBRO", valor: "10" },
    { nome: "NOVEMBRO", valor: "11" },
    { nome: "DEZEMBRO", valor: "12" },
  ]

  taxas: Array<any>;
  selectAno: String = '';
  selectMes: any;

  selicForm: FormGroup;

  constructor(private selic: SelicServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    for (let i = 2007; i < 2017; i++) {
      this.anos.push(i);
  }
  this.selicForm = this.fb.group({
      anosControl: [{value: this.selectAno}, Validators.required],
      mesesControl: {value: this.selectMes}
  });
  }

  buscar() {
    if (!this.selicForm.valid) {
        return;
    }
    this.taxas = [];
    let obj = Object.assign({}, this.selicForm.value);
    this.selic.AnoMesTaxaSelic(obj.anosControl, obj.mesesControl).subscribe(t => {
        for(let taxa of t) {
            this.taxas.push(taxa);
        }
    });
}

}
