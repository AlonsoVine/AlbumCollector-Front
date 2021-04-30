import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
      this.usuarioService.getUsuarios().subscribe(
        usuarios => this.usuarios = usuarios
      );
  }

}
