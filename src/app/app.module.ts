import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';

@NgModule({
	declarations: [
		AppComponent,
  		ArtistCardComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
