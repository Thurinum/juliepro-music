export module Models {
	export class Artist {
		constructor(
			public title	: string,
			public thumb_url	: string,
			public songs	: Song[]
		) {}
	}

	export class Song {
		constructor(
			public title	: string,
			public artist	: Artist
		) {}
	}

	export class Album {
		constructor(
			public title	: string,
			public thumb_url	: string,
			public songs	: Song[]
		) {}
	}
}
