import { Component } from '@angular/core';
import { Models } from "../models"

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})


export class AppComponent {
	query?: string
	readonly API_KEY : string = "9a8a3facebbccaf363bb9fd68fa37abf";

	albums: Models.Album[] = []
	currentTracks: string[] = []

	constructor() {}

	getSongs(album?: Models.Album): void {
		fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&album=${album?.name}&autocorrect=1&artist=${album?.artist}&api_key=${this.API_KEY}&format=json`)
			.then(data => data.json())
			.then(songdata => {
				if (!songdata) {
					alert("The song doesn't exist. Wtff");
					return;
				}

				this.currentTracks = [];

				songdata["album"]["tracks"].forEach((elem: any) => {
					this.currentTracks.push(elem["name"]);
				});
			});
	}

	getArtist(name?: string): void {
		if (!name) {
			alert("Bruh enter an artist name lol")
			return;
		}

		fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&autocorrect=1&artist=${name}&api_key=${this.API_KEY}&format=json`)
			.then(data => data.json())
			.then(artistdata => {
				if (!artistdata["artist"]) {
					alert("There's no artist with that name. Rekt")
					return;
				}

				fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&autocorrect=1&artist=${name}&api_key=${this.API_KEY}&format=json`)
				.then(data => data.json())
				.then(albumdata => {
					console.log(albumdata["topalbums"]["album"])

					this.albums = [];

					albumdata["topalbums"]["album"].forEach((elem: any )=> {
						const album = new Models.Album(
							elem["name"],
							elem["artist"]["name"],
							elem["image"][3]["#text"],
							elem["playcount"]
						);

						this.albums.push(album);
					});
				});
			});
	}
}
