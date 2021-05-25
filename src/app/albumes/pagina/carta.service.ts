import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Carta } from './carta';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import * as conf from '../../config';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  private url: string = conf.BACK_URL + "/carta";

  constructor(
    private http: HttpClient
  ) { }

  getCartas(usuario: string, page: number): Observable<any> {
    return this.http.get<Carta[]>(this.url + "/" + usuario + "/page/" + page).pipe(
      map((response: any) => {
        (response.content as Carta[]).map(carta => {
          this.getImagenCarta(carta);
          return carta;
        });
        return response;
      }
      ), catchError(e => {
        //console.error(e.error.mensaje);
        //this.router.navigate(['/verdispositivos'])
        //Swal.fire('Error al editar', e.error.mensaje, 'error')
        return throwError(e);
      })
    )
  }

  getImagenCarta(carta: Carta): void {
    let url: string = "https://api.scryfall.com/cards/";
    this.http.get<Map<string, string>>(url + carta.scryfallId).pipe(
      map((response: any) => {
        carta.image_uris = response.image_uris as Map<string, string>;
      }
      )
    )
  }
}
