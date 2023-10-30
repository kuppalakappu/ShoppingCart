import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdateproductComponent } from './pages/updateproduct/updateproduct.component';
import { AuthGuard } from './auth.guard';
import { AdsComponent } from './pages/ads/ads.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'updateProduct/:id',
    component: UpdateproductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ads',
    component: AdsComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
