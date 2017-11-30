import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './common/app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile//profile.component';

import { ApiService } from './common/api.service';
import { AuthGuard } from './common/auth.guard';
import { NavigationComponent } from './partials/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
