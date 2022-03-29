import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
