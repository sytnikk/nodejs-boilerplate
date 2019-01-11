import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomePageComponent} from './pages/home/home.component';
import {NahuiPageComponent} from './pages/nahui/nahui.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'nahui', component: NahuiPageComponent },
  { path: 'nahui/:id', component: NahuiPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
