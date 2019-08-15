import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';

import { GuruHeader, GuruContent, GuruFooter } from './components/helper';
import { GuruSidebar } from './components/sidebar';
import { GuruCardComponent } from './guru-card.component';
@NgModule({
  declarations: [GuruCardComponent, GuruHeader, GuruContent, GuruFooter, GuruSidebar],
  imports: [CommonModule, MatToolbarModule, MatSidenavModule],
  exports: [GuruCardComponent, GuruHeader, GuruContent, GuruFooter, GuruSidebar]
})
export class GuruCardModule {}
