import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carta } from './carta';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CartaService {

  private url: string = "https://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  getCarta(scryfallId: string): Observable<any>{
    let url = this.url + "/mtgdb/carta";
    return this.http.get(`${url}/${scryfallId}`).pipe(
      map((response: any) => {
        (response as Carta[]).map(
          carta => {
            return carta;
          }
        );
        return response;
      })
    );
  }



}
