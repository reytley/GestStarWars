import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStarShipPage } from './new-star-ship.page';

describe('NewStarShipPage', () => {
  let component: NewStarShipPage;
  let fixture: ComponentFixture<NewStarShipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStarShipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStarShipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
