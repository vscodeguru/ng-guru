import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GuruScrollableCard } from './card-scroller-guru.directive';
import { GuruScrollablePrimeTable } from './prime-scroller-guru.directive';
// import { NgGuruCardModule } from '@ng-guru/card';
@NgModule({
  declarations: [GuruScrollableCard, GuruScrollablePrimeTable],
  imports: [BrowserModule, RouterModule],
  exports: [GuruScrollableCard, GuruScrollablePrimeTable],
  providers: []
})
export class GuruDirectiveModule {}
