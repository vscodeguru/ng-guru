import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GuruScrollableCard, GuruScrollablePrimeTable } from 'lib/guru/src/directive/scroller';
@NgModule({
  declarations: [GuruScrollableCard, GuruScrollablePrimeTable],
  imports: [BrowserModule, RouterModule],
  exports: [GuruScrollableCard, GuruScrollablePrimeTable],
  providers: []
})
export class GuruDirectiveModule {}
