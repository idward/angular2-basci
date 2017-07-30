import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo/ALL',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    redirectTo: 'todo/ALL'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const RoutingModule = RouterModule.forRoot(routes);
