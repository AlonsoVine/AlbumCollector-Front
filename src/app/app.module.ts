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
import { CartasComponent } from './cartas/cartas.component';
import { CartaComponent } from './carta/carta.component';
// Para conectar la app Angular con el backend Spring

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'nuevo-usuario', component: FormNuevoUsuarioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsuariosComponent,
    FormNuevoUsuarioComponent,
    AlbumesComponent,
    CartasComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
