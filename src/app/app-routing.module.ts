import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  {
    path: '',
    loadChildren: () => import('./Components/inicio/inicio.module').then(m => m.InicioModule),
    pathMatch: 'full'
  },
  {
    path: 'tipos-animales',
    loadChildren: () => import('./Components/tipos-animales/tipos-animales.module').then(m => m.TiposAnimalesModule)
  },
  {
    path: 'tipos-animales/mamiferos',
    loadChildren: () => import('./Components/tipos-animales/mamiferos/mamiferos.module').then(m => m.MamiferosModule)
  },
  {
    path: 'tipos-animales/mamiferos/animal/:id/:nombre',
    loadChildren: () => import('./Components/tipos-animales/animal/animal.module').then(m => m.AnimalModule) 
  },
  {
    path: 'tipos-animales/aves',
    loadChildren: () => import('./Components/tipos-animales/aves/aves.module').then(m => m.AvesModule)
  },
  {
    path: 'tipos-animales/aves/ave/:id/:nombre',
    loadChildren: () => import('./Components/tipos-animales/aves/ave/ave.module').then(m => m.AveModule) 
  },
  {
    path: 'tipos-animales/reptiles',
    loadChildren: () => import('./Components/tipos-animales/reptiles/reptiles.module').then(m => m.ReptilesModule)
  },
  {
    path: 'tipos-animales/reptiles/reptil/:id/:nombre',
    loadChildren: () => import('./Components/tipos-animales/reptiles/reptil/reptil.module').then(m => m.ReptilModule) 
  },
  {
    path: 'tipos-animales/peces',
    loadChildren: () => import('./Components/tipos-animales/peces/peces.module').then(m => m.PecesModule)
  },
  {
    path: 'tipos-animales/peces/pez/:id/:nombre',
    loadChildren: () => import('./Components/tipos-animales/peces/pez/pez.module').then(m => m.PezModule) 
  },
  {
    path: 'tipos-animales/insectos',
    loadChildren: () => import('./Components/tipos-animales/insectos/insectos.module').then(m => m.InsectosModule)
  },
  {
    path: 'tipos-animales/insectos/insecto/:id/:nombre',
    loadChildren: () => import('./Components/tipos-animales/insectos/insecto/insecto.module').then(m => m.InsectoModule) 
  },
  {
    path: 'tipos-animales/anfibios',
    loadChildren: () => import('./Components/tipos-animales/anfibios/anfibios.module').then(m => m.AnfibiosModule)
  },
  {
    path: 'tipos-animales/anfibios/anfibio/:id/:nombre',
    loadChildren: () => import('./Components/tipos-animales/anfibios/anfibio/anfibio.module').then(m => m.AnfibioModule) 
  },
  {
    path: 'tipos-animales/crustaceos',
    loadChildren: () => import('./Components/tipos-animales/crustaceos/crustaceos.module').then(m => m.CrustaceosModule)
  },
  {
    path: 'tipos-animales/crustaceos/crustaceo/:id/:nombre',
    loadChildren: () => import('./Components/tipos-animales/crustaceos/crustaceo/crustaceo.module').then(m => m.CrustaceoModule) 
  },
  {
    path: 'informacion',
    loadChildren: () => import('./Components/informacion/informacion.module').then(m => m.InformacionModule)
  },
  {
    path: 'pagina404',
    loadChildren: () => import('./Components/pagina404/pagina404.module').then(m => m.Pagina404Module)
  },
  { path: '**', redirectTo: 'pagina404', pathMatch: 'full'}
   
   
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas, {scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
