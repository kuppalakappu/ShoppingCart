import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { DashboardService } from './dashboard/dashboard.service';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HeaderComponent,
    SearchbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
