import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutProjectComponent } from './about-project/about-project.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about-project/:id', component: AboutProjectComponent},
  {path: '**', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
