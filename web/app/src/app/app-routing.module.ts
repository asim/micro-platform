import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ServicesComponent } from "./services/services.component";
import { ServiceComponent } from "./service/service.component";
import { NewServiceComponent } from "./new-service/new-service.component";
import { AuthGuard } from "./auth.guard";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NotInvitedComponent } from "./not-invited/not-invited.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: "not-invited",
    component: NotInvitedComponent
  },
  //{ path: "login", component: LoginComponent },
  {
    path: "service/:id",
    component: ServiceComponent,
    canActivate: [AuthGuard]
  },
  { path: "services", component: ServicesComponent, canActivate: [AuthGuard] },
  {
    path: "service/new",
    component: NewServiceComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
