import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SelicServiceService } from 'app/services/simplic/selic-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taxa-anual',
  templateUrl: './taxa-anual.component.html',
  styleUrls: ['./taxa-anual.component.scss']
})
export class TaxaAnualComponent implements OnInit {

  anos: Array<Number> = [];

  taxas: Array<any>;
  selectAno: String = '';

  selicForm: FormGroup;

  constructor(
    private selic: SelicServiceService,
    private fb: FormBuilder,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { calculo: any[] }) => {
      if (data.calculo !== undefined) {
        console.log(data.calculo);
        this.taxas = [];
        this.taxas = data.calculo;
      }
    });
    for (let i = 2007; i < 2017; i++) {
      this.anos.push(i);
    }
    this.selicForm = this.fb.group({
      anosControl: [{ value: this.selectAno }, Validators.required],
    });
  }
  buscar() {
    if (!this.selicForm.valid) {
      return;
    }
    this.taxas = [];
    let obj = Object.assign({}, this.selicForm.value);
    this.selic.calculoMediaAno(obj.anosControl).subscribe(t => {
      for (let taxa of t) {
        this.taxas.push(taxa);
      }
    });
  }

}
