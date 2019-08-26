import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private messageSource = new BehaviorSubject(new Object());
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  getClientes() {
    return this.http.get('../../assets/data/clientes.json');
  }

  getPoints() {
    return this.http.get('../../assets/data/pontos.json');
  }

  getClienteDetail() {
    return this.http.get('../../assets/data/clienteselecionado.json');
  }
}
