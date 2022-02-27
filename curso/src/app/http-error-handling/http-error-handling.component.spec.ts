import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorHandlingComponent } from './http-error-handling.component';

describe('HttpErrorHandlingComponent', () => {
  let component: HttpErrorHandlingComponent;
  let fixture: ComponentFixture<HttpErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpErrorHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
