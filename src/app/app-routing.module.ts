import { NgModule } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {CarbonFootprintComponent} from "./component/carbon-footprint/carbon-footprint.component";
import {AuthComponent} from "./component/auth/auth.component";

const isAdminCanActivateFn: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return sessionStorage.getItem("isAuthenticated") === "true";
  };

const routes: Routes = [
  { path: '', component: CarbonFootprintComponent},
  { path: 'login', component: AuthComponent},
  { path: 'voyages', component: CarbonFootprintComponent},
  { path: 'edit', component: CarbonFootprintComponent, canActivate: [isAdminCanActivateFn]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
