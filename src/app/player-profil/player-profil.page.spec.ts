import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfilPage } from './player-profil.page';

describe('PlayerProfilPage', () => {
  let component: PlayerProfilPage;
  let fixture: ComponentFixture<PlayerProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerProfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
