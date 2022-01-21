import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnfibiosComponent} from './anfibios.component';

const routes: Routes = [
  {path: '', component: AnfibiosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnfibiosRoutingModule { }
