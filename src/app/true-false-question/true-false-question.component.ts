import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsServiceClient} from '../../services/question-service';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {
  selected = '';
  answer = false;

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  grading = false;

  constructor(private service: QuestionsServiceClient,
              private route: ActivatedRoute) { }

  radioChangeHandler(event: any) {
    this.selected = event.target.value;
    this.grading = false;
  }

  grade = () => {
    this.grading = true;
    if (this.question.correct === 'true') {
      this.answer = true;
    } else {
      this.answer = false;
    }
    console.log(this.answer);
  }

  ngOnInit(): void {
  }

}
