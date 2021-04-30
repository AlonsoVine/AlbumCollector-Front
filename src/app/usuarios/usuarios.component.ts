import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { UsuarioService } from 


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor() { }

  ngOnInit(): void {

  }

}
