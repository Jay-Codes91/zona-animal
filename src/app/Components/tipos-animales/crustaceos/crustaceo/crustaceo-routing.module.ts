import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrustaceoComponent} from './crustaceo.component';

const routes: Routes = [
  {path: '', component: CrustaceoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrustaceoRoutingModule { }
