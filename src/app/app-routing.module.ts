import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { TerminosycondicionesScreenComponent } from './screens/terminosycondiciones-screen/terminosycondiciones-screen.component';
import { PoliticasScreenComponent } from './screens/politicas-screen/politicas-screen.component';
import { JugandoScreenComponent } from './screens/jugando-screen/jugando-screen.component';
import { PerfilScreenComponent } from './screens/perfil-screen/perfil-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full' },
  { path: 'juego-terminado', component: JuegoTerminadoScreenComponent, pathMatch: 'full' },
  { path: 'instrucciones', component: InstruccionesScreenComponent, pathMatch: 'full'},
  { path: 'nuevo-look', component: NuevoLookScreenComponent, pathMatch: 'full'},
  { path: 'terminos', component: TerminosycondicionesScreenComponent, pathMatch: 'full'},
  { path: 'politicas', component: PoliticasScreenComponent, pathMatch: 'full'},
  { path: 'jugando', component: JugandoScreenComponent, pathMatch: 'full'},
  { path: 'perfil', component: PerfilScreenComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }