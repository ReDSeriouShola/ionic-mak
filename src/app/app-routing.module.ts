import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {Preview1Component} from './preview1/preview1.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  //////////////////////////////////////////////////////////////////////////////////////////
  {
    path: 'preview1',
    loadChildren: () => import('./preview1/preview1.module').then( m => m.Preview1ComponentModule)
  },
  {
    path: 'preview1',
    redirectTo: 'preview1',
    pathMatch: 'full'
  },
  //////////////////////////////////////////////////////////////////////////////////////////
  {
    path: 'preview',
    component:Preview1Component
  },
  {
    path: 'room-modal',
    loadChildren: () => import('./modal/room-modal/room-modal.module').then( m => m.RoomModalPageModule)
  },
  {
    path: 'login-modal',
    loadChildren: () => import('./modal/login-modal/login-modal.module').then( m => m.LoginModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
