import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AveComponent} from './ave.component';

const routes: Routes = [
  {path: '', component: AveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AveRoutingModule { }
