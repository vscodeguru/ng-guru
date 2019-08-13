import { NgModule } from '@angular/core';
import { NgGuruComponent } from './ng-guru.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [NgGuruComponent],
  imports: [
	MatToolbarModule
  ],
  exports: [NgGuruComponent]
})
export class NgGuruModule { }
