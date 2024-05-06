import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path:"" , component:HomeComponent , title:"home"},
  {path:"home" , component:HomeComponent , title:"home"},
  {path:"search" , component:SearchComponent , title:"search"},
  {path:"movie/:id" , component:DetailsComponent , title:"Details"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
