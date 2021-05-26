import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuarios/usuario.service';
import { FormNuevoUsuarioComponent } from './usuarios/form.nuevo.usuario.component';

import { RouterModule, Routes } from '@angular/router';
// Permite asociar componentes con rutas URL

import { HttpClientModule } from '@angular/common/http';
import { AlbumesComponent } from './albumes/albumes.component';
//import { AlbumService } from './albumes/album.service';
//import { PaginaComponent } from './albumes/pagina/pagina.component';
//import { CartaComponent } from './albumes/pagina/carta.component';
//import { SidebarComponent } from './albumes/sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';
// SERVICIOS
//import { CartaService } from './albumes/pagina/carta.service';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'nuevo-usuario', component: FormNuevoUsuarioComponent},
  {path: 'albumes', component: AlbumesComponent},
  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsuariosComponent,
    FormNuevoUsuarioComponent,
    AlbumesComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
