import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCardComponent } from './artist-card.component';

describe('CardComponent', () => {
	let component: ArtistCardComponent;
	let fixture: ComponentFixture<ArtistCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ArtistCardComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ArtistCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
