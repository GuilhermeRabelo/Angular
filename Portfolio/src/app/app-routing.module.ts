import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutProjectComponent } from './about-project/about-project.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-project', component: AboutProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
