import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
