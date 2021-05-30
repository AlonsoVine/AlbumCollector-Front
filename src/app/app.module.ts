import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuarios/usuario.service';
import { AlbumesService } from './albumes/albumes.service';
import { CartaService } from './album/carta.service';
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
<<<<<<< HEAD
import { PaginadorAlbumComponent } from './albumes/paginador-album/paginador-album.component';
=======
import { AlbumComponent } from './album/album.component';
>>>>>>> 6d5990444eddfe8d4c3d92d7d4debc2649ba3d4f
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
    InicioComponent,
<<<<<<< HEAD
    PaginadorAlbumComponent
=======
    AlbumComponent
>>>>>>> 6d5990444eddfe8d4c3d92d7d4debc2649ba3d4f
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsuarioService,
    AlbumesService,
    CartaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
