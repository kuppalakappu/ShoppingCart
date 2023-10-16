import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {UpdateproductComponent} from './pages/updateproduct/updateproduct.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'updateProduct/:id', component: UpdateproductComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
