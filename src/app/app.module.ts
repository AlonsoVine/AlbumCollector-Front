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
import { AlbumService } from './albumes/album.service';
import { PaginaComponent } from './albumes/pagina/pagina.component';
import { CartaComponent } from './albumes/pagina/carta.component';
import { SidebarComponent } from './albumes/sidebar/sidebar.component';

// SERVICIOS
import { CartaService } from './albumes/pagina/carta.service';

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'nuevo-usuario', component: FormNuevoUsuarioComponent},
  {path: 'albumes', component: AlbumesComponent},
  {path: 'cartas', component: CartaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsuariosComponent,
    FormNuevoUsuarioComponent,
    AlbumesComponent,
    PaginaComponent,
    CartaComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //SidebarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    UsuarioService,
    AlbumService,
    CartaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
