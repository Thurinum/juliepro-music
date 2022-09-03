import { Component } from '@angular/core';
import { Album } from "../models/album"

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})

export class AppComponent {
	query?: string;
	readonly API_KEY: string = "9a8a3facebbccaf363bb9fd68fa37abf";

	currentAlbums: Album[] = [];
	currentTracks: string[] 	= [];

	constructor() { }

	getSongs(album?: Album): void {
		fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&album=${album?.name}&autocorrect=1&artist=${album?.artist}&api_key=${this.API_KEY}&format=json`)
			.then(data => data.json())
			.then(songdata => {
				const tracks = songdata?.album?.tracks?.track;
				
				if (!tracks || tracks.name) {
					this.currentTracks = ["This author's tracks are unavailable."];
					return;
				}				
				
				this.currentTracks = [];
				
				for (const track of tracks)
					this.currentTracks.push(track.name);
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
						this.currentAlbums = [];

						albumdata["topalbums"]["album"].forEach((elem: any) => {
							if (elem.name === "(null)")
								return;

							const album = new Album(
								elem.name,
								elem.artist.name,
								elem.image[3]["#text"],
								elem.playcount
							);

							this.currentAlbums.push(album);
						});

						if (Math.random() < 0.1 || name.includes("minem"))
							this.currentAlbums.unshift(new Album(
								"4N6", "Maxime Pelletier",
								"https://raw.githubusercontent.com/departement-info-cem/departement-info-cem.github.io/master/data/photos/mp.png", 66666
							));
					});
			});
	}
}
