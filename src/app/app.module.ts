import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { CortesComponent } from './cortes/cortes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NuestroEquipoComponent } from './nuestro-equipo/nuestro-equipo.component';
import { ProductosComponent } from './productos/productos.component';
import { AcademiaComponent } from './academia/academia.component';
import { ContactoComponent } from './contacto/contacto.component';
import {MatSelectModule} from '@angular/material/select';

// Google Maps de Angular 9 
import {GoogleMapsModule} from '@angular/google-maps';
import { BonosComponent } from './bonos/bonos.component'; 


@NgModule({
  declarations: [
    AppComponent, 
    InicioComponent,
    MenuComponent,
    CortesComponent,
    FooterComponent,
    NuestroEquipoComponent,
    ProductosComponent,
    AcademiaComponent,
    ContactoComponent,
    BonosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MdbCarouselModule,
    GoogleMapsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
