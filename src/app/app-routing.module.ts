import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { CommonModule } from '@angular/common';


const routes:Routes = [
  {path:'', redirectTo:'/List', pathMatch:'full' },
  {path:'List', component:ListComponent},
  {path:'Details/:id', component:DetailsComponent},
  {path:'Edit/:id', component:EditComponent},
  {path:'Add', component:AddComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }