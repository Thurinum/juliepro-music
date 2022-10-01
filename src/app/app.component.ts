import { Component } from '@angular/core';
import { Album } from "../models/album"
import { VulpesVulpesComponent } from './vulpes-vulpes/vulpes-vulpes.component';
import { VulpesLagopusComponent } from './vulpes-lagopus/vulpes-lagopus.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})

/**
 * La classe de composant principale.
 *
 * @export
 * @class AppComponent
 */
export class AppComponent {
	readonly API_KEY: string = "9a8a3facebbccaf363bb9fd68fa37abf";

	/**
	 * La requête utilisateur actuelle.
	 * Cette valeur est un two-way-binding avec le champ de recherche.
	 *
	 * @type {string}
	 * @memberof AppComponent
	 */
	query?: string;


	/**
	 * La liste des albums qui sont affichées dans l'interface.
	 * Mise à jour dynamiquement par la requête à l'API.
	 *
	 * @type {Album[]}
	 * @memberof AppComponent
	 */
	currentAlbums: Album[]  = [];


	/**
	 * La liste des chansons d'un album de l'artiste courant.
	 *
	 * @type {string[]}
	 * @memberof AppComponent
	 */
	currentTracks: string[] = [];

	/**
	 * Obtient les informations d'un artiste, s'il existe, depuis le Last.FM API.
	 *
	 * @param {string} [name] - Le nom complet de l'artiste.
	 * @return {*}  {void}
	 * @memberof AppComponent
	 */
	getArtist(name?: string): void {
		// check for user input
		if (!name) {
			alert("Please enter an artist name...");
			return;
		}

		// http request for artist via Last.FM API
		fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&autocorrect=1&artist=${name}&api_key=${this.API_KEY}&format=json`)
			.then(data => data.json())
			.then(artistdata => {
				if (!artistdata["artist"]) {
					alert("There's no artist with that name.");
					return;
				}

				// http request for artist's tracks
				fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&autocorrect=1&artist=${name}&api_key=${this.API_KEY}&format=json`)
					.then(data => data.json())
					.then(albumdata => {
						this.currentAlbums = [];

						// add artist's albums to current albums
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

						if (Math.random() < 0.001 || name.includes("minem"))
							this.currentAlbums.unshift(new Album(
								"4N6", "Maxime Pelletier",
								"https://raw.githubusercontent.com/departement-info-cem/departement-info-cem.github.io/master/data/photos/mp.png", 66666
							));
					});
			});
	}

	getTracks(album?: Album): void {
		// http request for tracks via Last.FM API
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

	constructor() { }
}
