import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLivreurComponent } from './form-livreur.component';

describe('FormLivreurComponent', () => {
  let component: FormLivreurComponent;
  let fixture: ComponentFixture<FormLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
