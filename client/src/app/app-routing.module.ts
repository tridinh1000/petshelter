import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddpetComponent } from './addpet/addpet.component';
import { EditpetComponent } from './editpet/editpet.component';
import { DisplaypetComponent } from './displaypet/displaypet.component';

const routes: Routes = [
  {path: 'pets', component: HomeComponent},
  {path: 'pets/new', component: AddpetComponent},
  {path: 'pets/:id', component: DisplaypetComponent},
  {path: 'pets/:id/edit', component: EditpetComponent},
  {path: "", redirectTo: '/pets', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
