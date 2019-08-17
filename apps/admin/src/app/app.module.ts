import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';

import { GuruCardModule, GuruDirectiveModule } from '@guru/core';

import { AppComponent } from './app.component';
import { PrimeDataComponent } from './example/prime-data/prime-data.component';
import { CardDataComponent } from './example/card-data/card-data.component';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent, CardDataComponent, PrimeDataComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    TableModule,

    GuruCardModule,
    GuruDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
