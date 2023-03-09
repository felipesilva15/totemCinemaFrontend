import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import of components
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
