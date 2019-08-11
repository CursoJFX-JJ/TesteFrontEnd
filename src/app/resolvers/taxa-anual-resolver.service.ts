import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SelicServiceService } from 'app/services/simplic/selic-service.service';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaxaAnualResolverService implements Resolve<any[]>{

  constructor(private selic: SelicServiceService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> |
    Observable<never> {
    const ano = route.paramMap.get('ano');
    console.log(ano)
    return this.selic.calculoMediaAno(ano).pipe(
      take(1), mergeMap(calculo => {
        if (calculo) {
          return of(calculo);
        } else {
          this.router.navigate(['./home/']);
          return EMPTY;
        }
      })
    );
  }

}
