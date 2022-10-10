import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademiaComponent } from './academia/academia.component';
import { BonosComponent } from './bonos/bonos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CortesComponent } from './cortes/cortes.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuestroEquipoComponent } from './nuestro-equipo/nuestro-equipo.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'cortes', component: CortesComponent },
  { path: 'nuestroEquipo', component: NuestroEquipoComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'academia', component: AcademiaComponent },
  { path: 'bonos', component: BonosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
