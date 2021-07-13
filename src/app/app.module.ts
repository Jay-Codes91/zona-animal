import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importado
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DatosAnimalesService } from './datos-animales.service';
import { FormsModule } from '@angular/forms';

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
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BuscarPipe } from './buscar.pipe';
import { AveComponent } from './tipos-animales/aves/ave/ave.component';
import { InsectoComponent } from './tipos-animales/insectos/insecto/insecto.component';
import { PezComponent } from './tipos-animales/peces/pez/pez.component';
import { ReptilComponent } from './tipos-animales/reptiles/reptil/reptil.component';

const rutas: Routes = [
  
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'tipos-animales', component: TiposAnimalesComponent },
  { path: 'tipos-animales/mamiferos', component: MamiferosComponent },
  { path: 'tipos-animales/aves', component: AvesComponent },
  { path: 'tipos-animales/aves/ave/:id/:nombre', component: AveComponent },
  { path: 'tipos-animales/reptiles', component: ReptilesComponent },
  { path: 'tipos-animales/reptiles/reptil/:id/:nombre', component: ReptilComponent },
  { path: 'tipos-animales/peces', component: PecesComponent },
  { path: 'tipos-animales/peces/pez/:id/:nombre', component: PezComponent },
  { path: 'tipos-animales/insectos', component: InsectosComponent },
  { path: 'tipos-animales/insectos/insecto/:id/:nombre', component: InsectoComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'tipos-animales/mamiferos/animal/:id/:nombre', component: AnimalComponent },
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
    BuscarPipe,
    AveComponent,
    InsectoComponent,
    PezComponent,
    ReptilComponent
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [DatosAnimalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
