import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CancionesComponent } from './components/canciones/canciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'perfil', pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  { path: 'canciones', component: CancionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
