import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngGuru',
  template: `
    <mat-toolbar color="primary">
		<mat-toolbar-row>
			<span>Custom Toolbar</span>
		</mat-toolbar-row>
	</mat-toolbar>
  `,
  styles: []
})
export class NgGuruComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
