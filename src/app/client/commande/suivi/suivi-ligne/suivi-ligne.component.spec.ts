import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviLigneComponent } from './suivi-ligne.component';

describe('SuiviLigneComponent', () => {
  let component: SuiviLigneComponent;
  let fixture: ComponentFixture<SuiviLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
