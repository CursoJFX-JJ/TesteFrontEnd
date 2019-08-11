import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { SelicServiceService } from 'app/services/simplic/selic-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

    anos: Array<Number> = [];
    meses: Array<any> = [
        { nome: "JANEIRO", valor: "01" },
        { nome: "FEVEREIRO", valor: "02" },
        { nome: "MARÇO", valor: "03" },
        { nome: "ABRIL", valor: "04" },
        { nome: "MAIO", valor: "05" },
        { nome: "JUNHO", valor: "06" },
        { nome: "JULHO", valor: "07" },
        { nome: "AGOSTO", valor: "08" },
        { nome: "SETEMBRO", valor: "09" },
        { nome: "OUTUBRO", valor: "10" },
        { nome: "NOVEMBRO", valor: "11" },
        { nome: "DEZEMBRO", valor: "12" },
    ]

    taxas: Array<any> = [];
    selectAno: String = '';
    selectMes: any;

    selicForm: FormGroup;

    focus;
    focus1;
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
        let obj = Object.assign({}, this.selicForm.value);
        console.log(JSON.stringify(this.selicForm.value.mesesControl));
        this.selic.AnoMesTaxaSelic(obj.anosControl, obj.mesesControl).subscribe(t => {
            if (t) {
                this.taxas.push(t);
            }
        });
    }

    updateSelectedValue(e) {
        console.log(e);
    }

}
