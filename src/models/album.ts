export class Album {
	/**
	 * Creates an instance of Album.
	 * @param {string} name
	 * @param {string} artist
	 * @param {string} thumb_url
	 * @param {number} playcount
	 * @memberof Album
	 */
	constructor(
		public name		: string,
		public artist	: string,
		public thumb_url	: string,
		public playcount	: number,
	) {}
}
