import {Component, Input, OnInit} from '@angular/core';
import {QuestionsServiceClient} from '../../services/question-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  selected = '';
  answer = false;

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: '', choices: []};
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
  }

  ngOnInit(): void {
  }
}
