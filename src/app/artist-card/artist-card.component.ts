import { Component, Inject, Input, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
	selector: 'app-artist-card',
	templateUrl: './artist-card.component.html',
	styleUrls: ['./artist-card.component.sass']
})
export class ArtistCardComponent {
	@Input()
	name?: string;
}
