import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importado
import { RouterModule, Routes } from '@angular/router';
import { DatosAnimalesService } from './Services/datos-animales.service';//Servicio
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
//Angular material
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { TiposAnimalesComponent } from './Components/tipos-animales/tipos-animales.component';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { MamiferosComponent } from './Components/tipos-animales/mamiferos/mamiferos.component';
import { AvesComponent } from './Components/tipos-animales/aves/aves.component';
import { ReptilesComponent } from './Components/tipos-animales/reptiles/reptiles.component';
import { PecesComponent } from './Components/tipos-animales/peces/peces.component';
import { InsectosComponent } from './Components/tipos-animales/insectos/insectos.component';
import { Pagina404Component } from './Components/pagina404/pagina404.component';
import { AnimalComponent } from './Components/tipos-animales/animal/animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AveComponent } from './Components/tipos-animales/aves/ave/ave.component';
import { InsectoComponent } from './Components/tipos-animales/insectos/insecto/insecto.component';
import { PezComponent } from './Components/tipos-animales/peces/pez/pez.component';
import { ReptilComponent } from './Components/tipos-animales/reptiles/reptil/reptil.component';
//Pipe
import { BuscarPipe } from './buscar.pipe';
import { AnfibiosComponent } from './Components/tipos-animales/anfibios/anfibios.component';
import { AnfibioComponent } from './Components/tipos-animales/anfibios/anfibio/anfibio.component';
import { CrustaceosComponent } from './Components/tipos-animales/crustaceos/crustaceos.component';
import { CrustaceoComponent } from './Components/tipos-animales/crustaceos/crustaceo/crustaceo.component';
import { HeaderComponent } from './Components/root/header/header.component';
import { MenuLateralComponent } from './Components/root/menu-lateral/menu-lateral.component';
import { FooterComponent } from './Components/root/footer/footer.component';


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
    ReptilComponent,
    AnfibiosComponent,
    AnfibioComponent,
    CrustaceosComponent,
    CrustaceoComponent,
    HeaderComponent,
    MenuLateralComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DatosAnimalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
