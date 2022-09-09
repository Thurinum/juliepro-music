import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { VulpesVulpesComponent } from './vulpes-vulpes/vulpes-vulpes.component';
import { VulpesLagopusComponent } from './vulpes-lagopus/vulpes-lagopus.component';
import { AppRoutingModule } from './app-routing.module';
import { AppModalDialogComponent } from './app-modal-dialog/app-modal-dialog.component';

@NgModule({
	declarations: [
		AppComponent,
  		ArtistCardComponent,
		VulpesVulpesComponent,
		VulpesLagopusComponent,
  AppModalDialogComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
  AppRoutingModule,

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
