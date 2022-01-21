import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InsectosComponent} from './insectos.component';

const routes: Routes = [
  {path: '', component: InsectosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsectosRoutingModule { }
