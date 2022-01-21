import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PecesComponent} from './peces.component';

const routes: Routes = [
  {path: '', component: PecesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PecesRoutingModule { }
