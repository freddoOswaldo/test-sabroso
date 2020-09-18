import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from "./guards/auth.guard";
import { HistoryComponent } from './pages/history/history.component';
const routes: Routes = [{
  component:LoginComponent,
  path:''
},{
  component:CartComponent,
  path:'cart',
  canActivate:[AuthGuard]
},{
  component:HistoryComponent,
  path:'history',
  canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
