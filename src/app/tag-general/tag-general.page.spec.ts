import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagGeneralPage } from './tag-general.page';

describe('TagGeneralPage', () => {
  let component: TagGeneralPage;
  let fixture: ComponentFixture<TagGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagGeneralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
