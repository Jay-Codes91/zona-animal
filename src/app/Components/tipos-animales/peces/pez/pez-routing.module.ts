import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PezComponent} from './pez.component';

const routes: Routes = [
  {path: '', component: PezComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PezRoutingModule { }
