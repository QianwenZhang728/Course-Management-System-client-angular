import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizzes.ComponentComponent } from './quizzes.component.component';

describe('Quizzes.ComponentComponent', () => {
  let component: Quizzes.ComponentComponent;
  let fixture: ComponentFixture<Quizzes.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quizzes.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizzes.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
