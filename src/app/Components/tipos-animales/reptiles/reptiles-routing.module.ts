import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReptilesComponent} from './reptiles.component';

const routes: Routes = [
  {path: '', component: ReptilesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReptilesRoutingModule { }
