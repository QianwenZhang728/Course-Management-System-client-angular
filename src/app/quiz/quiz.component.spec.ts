import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz.ComponentComponent } from './quiz.component.component';

describe('Quiz.ComponentComponent', () => {
  let component: Quiz.ComponentComponent;
  let fixture: ComponentFixture<Quiz.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quiz.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
