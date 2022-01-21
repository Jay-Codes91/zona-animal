import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TiposAnimalesComponent} from './tipos-animales.component';

const routes: Routes = [
  {path: '', component: TiposAnimalesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposAnimalesRoutingModule { }
