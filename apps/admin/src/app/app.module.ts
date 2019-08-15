import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuruCardModule } from 'apps/admin/src/app/card';
// import { NgGuruCardModule } from '@ng-guru/card';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, GuruCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
