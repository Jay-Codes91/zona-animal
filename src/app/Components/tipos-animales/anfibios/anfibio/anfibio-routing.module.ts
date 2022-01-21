import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnfibioComponent} from './anfibio.component';

const routes: Routes = [
  {path: '', component: AnfibioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnfibioRoutingModule { }
