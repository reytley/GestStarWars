import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStarShipPage } from './details-star-ship.page';

describe('DetailsStarShipPage', () => {
  let component: DetailsStarShipPage;
  let fixture: ComponentFixture<DetailsStarShipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsStarShipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsStarShipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
