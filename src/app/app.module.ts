import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importado
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DatosAnimalesService } from './datos-animales.service';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { TiposAnimalesComponent } from './tipos-animales/tipos-animales.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MamiferosComponent } from './tipos-animales/mamiferos/mamiferos.component';
import { AvesComponent } from './tipos-animales/aves/aves.component';
import { ReptilesComponent } from './tipos-animales/reptiles/reptiles.component';
import { PecesComponent } from './tipos-animales/peces/peces.component';
import { InsectosComponent } from './tipos-animales/insectos/insectos.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { AnimalComponent } from './tipos-animales/animal/animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input'; 

const rutas: Routes = [
  
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'tipos-animales', component: TiposAnimalesComponent },
  { path: 'tipos-animales/mamiferos', component: MamiferosComponent },
  { path: 'tipos-animales/aves', component: AvesComponent },
  { path: 'tipos-animales/reptiles', component: ReptilesComponent },
  { path: 'tipos-animales/peces', component: PecesComponent },
  { path: 'tipos-animales/insectos', component: InsectosComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'tipos-animales/mamiferos/animal/:nombre', component: AnimalComponent },
  { path: 'pagina404', component: Pagina404Component },
  { path: '**', redirectTo: 'pagina404', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TiposAnimalesComponent,
    InformacionComponent,
    MamiferosComponent,
    AvesComponent,
    ReptilesComponent,
    PecesComponent,
    InsectosComponent,
    Pagina404Component,
    AnimalComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule
  ],
  providers: [DatosAnimalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
