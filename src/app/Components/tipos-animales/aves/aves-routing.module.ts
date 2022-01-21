import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AvesComponent} from './aves.component';

const routes: Routes = [
  {path: '', component: AvesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvesRoutingModule { }
