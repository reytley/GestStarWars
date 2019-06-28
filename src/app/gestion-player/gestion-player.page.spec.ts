import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPlayerPage } from './gestion-player.page';

describe('GestionPlayerPage', () => {
  let component: GestionPlayerPage;
  let fixture: ComponentFixture<GestionPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPlayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
