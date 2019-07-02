import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBddPage } from './gestion-bdd.page';

describe('GestionBddPage', () => {
  let component: GestionBddPage;
  let fixture: ComponentFixture<GestionBddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionBddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
