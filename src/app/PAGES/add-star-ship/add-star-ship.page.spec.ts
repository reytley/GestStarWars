import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStarShipPage } from './add-star-ship.page';

describe('AddStarShipPage', () => {
  let component: AddStarShipPage;
  let fixture: ComponentFixture<AddStarShipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStarShipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStarShipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
