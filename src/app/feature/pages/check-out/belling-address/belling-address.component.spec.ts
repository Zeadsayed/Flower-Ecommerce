import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BellingAddressComponent } from './belling-address.component';

describe('BellingAddressComponent', () => {
  let component: BellingAddressComponent;
  let fixture: ComponentFixture<BellingAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BellingAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BellingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
