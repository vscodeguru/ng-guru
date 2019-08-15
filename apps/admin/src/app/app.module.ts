import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableModule } from 'primeng/table';
import { GuruCardModule } from './guru/card';
import { GuruDirectiveModule } from './guru/directive';
// import { NgGuruCardModule } from '@ng-guru/card';
const routes: Routes = [];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FlexLayoutModule,
    TableModule,

    GuruCardModule,
    GuruDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
