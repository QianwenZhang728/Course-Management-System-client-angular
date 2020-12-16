import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseQuestion.ComponentComponent } from './true-false-question.component.component';

describe('TrueFalseQuestion.ComponentComponent', () => {
  let component: TrueFalseQuestion.ComponentComponent;
  let fixture: ComponentFixture<TrueFalseQuestion.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueFalseQuestion.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFalseQuestion.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
