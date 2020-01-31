import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ServicesComponent } from "./services/services.component";
import { ServiceComponent } from "./service/service.component";
import { NewServiceComponent } from "./new-service/new-service.component";
import { AuthGuard } from "./auth.guard";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "services", component: ServicesComponent, canActivate: [AuthGuard] },
  {
    path: "service/new",
    component: NewServiceComponent,
    canActivate: [AuthGuard]
  },
  { path: "service/:id", component: ServiceComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
