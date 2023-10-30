import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { DashboardService } from './pages/dashboard/dashboard.service';
import { CardComponent } from './components/card/card.component';
import { PopupComponent } from './components/popup/popup.component';
import { UpdateproductComponent } from './pages/updateproduct/updateproduct.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './pages/login/login.service';
import { JwtInterceptor} from './jwtinterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { AdsComponent } from './pages/ads/ads.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HeaderComponent,
    SearchbarComponent,
    CardComponent,
    PopupComponent,
    UpdateproductComponent,
    NavbarComponent,
    LoginComponent,
    TableComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
