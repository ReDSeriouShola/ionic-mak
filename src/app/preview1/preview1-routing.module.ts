import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Preview1Component } from './preview1.component';

const routes: Routes = [
  {
    path: 'preview1',
    component: Preview1Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Preview1ComponentRoutingModule {}
