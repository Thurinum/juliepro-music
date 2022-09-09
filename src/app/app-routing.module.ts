import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VulpesVulpesComponent } from './vulpes-vulpes/vulpes-vulpes.component';
import { VulpesLagopusComponent } from './vulpes-lagopus/vulpes-lagopus.component';

const routes: Routes = [
	{ path: "vulpes-vulpes", component: VulpesVulpesComponent },
	{ path: "vulpes-lagopus", component: VulpesLagopusComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
