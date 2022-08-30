export module Models {
	export class Song {
		constructor(
			public title	: string,
			public artist	: string
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
