import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrustaceosComponent} from './crustaceos.component';

const routes: Routes = [
  {path: '', component: CrustaceosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrustaceosRoutingModule { }
