import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InsectoComponent} from './insecto.component';

const routes: Routes = [
  {path: '', component: InsectoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsectoRoutingModule { }
