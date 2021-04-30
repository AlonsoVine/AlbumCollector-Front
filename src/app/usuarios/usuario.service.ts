import { Injectable } from '@angular/core';

import { Usuario } from './usuario';

import { /* of, */ Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint: string = 'http://localhost:8080/album-collector/api/usuario';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlEndPoint);
  }

}
