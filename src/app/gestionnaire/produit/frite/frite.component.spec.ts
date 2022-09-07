import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriteComponent } from './frite.component';

describe('FriteComponent', () => {
  let component: FriteComponent;
  let fixture: ComponentFixture<FriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
