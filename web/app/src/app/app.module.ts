import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

import {
  MatTabsModule,
  MatSidenavModule,
  MatToolbar,
  MatList,
  MatMenu,
  MatProgressSpinnerModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatToolbarModule } from "@angular/material";
import {
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatProgressBarModule
} from "@angular/material";
import { MatListModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from "./login/login.component";
import { ServicesComponent } from "./services/services.component";

import { CookieService } from "ngx-cookie-service";
import { UserService } from "./user.service";
import { HttpClientModule } from "@angular/common/http";
import { SimpleNotificationsModule } from "angular2-notifications";
import { ServiceComponent } from "./service/service.component";
import { FormsModule } from "@angular/forms";
import { SearchPipe } from "./search.pipe";
import { NewServiceComponent } from './new-service/new-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ServicesComponent,
    ServiceComponent,
    SearchPipe,
    NewServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatProgressBarModule
  ],
  providers: [CookieService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
