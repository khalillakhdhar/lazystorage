import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AchatsComponent } from './achats/achats.component';
import { DashboardComponent } from './dashboard.component';
import { IncomesComponent } from './incomes/incomes.component';

const routes: Routes = [
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  { path: '', component: DashboardComponent,

children:[
 { path:'accueil',component:AccueilComponent},
 {path:'income',component:IncomesComponent},
 {path:'achats',component:AchatsComponent}
]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
