import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-modal-dialog',
	templateUrl: './modal-dialog.component.html',
	styleUrls: ['./modal-dialog.component.sass']
})
export class AppModalDialogComponent {
	@Input()
	title?: string

	@Input()
	message?: string

	constructor() { }
}
