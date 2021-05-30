import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Carta } from './carta';

@Injectable()
export class AlbumService {

  private url: string;
  constructor(
    private http: HttpClient
  ) { }

  getPaginaAlbum(id:number, page: number): Observable<any>{
    this.url = "https://localhost:8080/collector/album";
    let params = new HttpParams().set("page", page.toString());
    return this.http.get(`${id}/${page}`,{params:params}).pipe(
      map((response: any) => {
        (response.content as Carta[]).map(album => {
          return album;
        });
        return response;
      }
      )
    );
  }
}