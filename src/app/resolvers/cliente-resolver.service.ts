import { Injectable } from '@angular/core';
import { ClienteService } from 'app/services/cliente.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteResolverService implements Resolve<any[]> {

  constructor(private clientService: ClienteService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> |
    Observable<never> {
      console.log('AQUI');
      
    const id = route.paramMap.get('id');
    console.log(id);
    return this.clientService.getPoints().pipe(
      take(1), mergeMap(cliente => {
        if (cliente) {
          return of(cliente);
        } else {
          this.router.navigate(['./home/']);
          return EMPTY;
        }
      })
    );
  }
}
