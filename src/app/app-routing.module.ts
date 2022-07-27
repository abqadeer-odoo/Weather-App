import { AstronomyComponent } from './astronomy/astronomy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullForcastComponent } from './full-forcast/full-forcast.component';
import { FutureComponent } from './future/future.component';
import { HistroyComponent } from './histroy/histroy.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  { path: 'home', component: FullForcastComponent },
  { path: 'history', component: HistroyComponent },
  { path: 'future', component: FutureComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'astronomy', component: AstronomyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
