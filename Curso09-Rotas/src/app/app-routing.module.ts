import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' }, // http://localhost:4200/
  { path: 'portfolio', component: CardComponent, children: [
    { path: ':id', component: CardComponent },  // http://localhost:4200/portfolio/1
    { path: ':id/:token', component: CardComponent }, // http://localhost:4200/portfolio/1/nome
  ] },
  { path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
