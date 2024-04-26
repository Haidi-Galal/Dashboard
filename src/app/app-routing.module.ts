import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'home',loadComponent:()=>import('./components/dashboard/dashboard.component').then((m)=>m.DashboardComponent),title:'dashboard'}
 , 
 
 {path:'details/:id',loadComponent:()=>import('./components/details/details.component').then((m)=>m.DetailsComponent),title:'details'}
 ,
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'**',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
