import { Component, Inject, Input, OnInit } from '@angular/core';
import { Album } from "../../models/album"

@Component({
	selector: 'app-artist-card',
	templateUrl: './artist-card.component.html',
	styleUrls: ['./artist-card.component.sass']
})
export class ArtistCardComponent {
	@Input()
	album?: Album
}
