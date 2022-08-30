import { Component } from '@angular/core';
import { Models } from "./models"

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})

export class AppComponent {
	title = 'TP1';

	artists : string[] = ["benjamin franklin", "ning ye", "maxime pelletier", "fluff fur", "idfk", "hellooooo"]

	constructor() {

	}
}
