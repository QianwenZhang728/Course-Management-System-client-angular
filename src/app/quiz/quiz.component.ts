import { Component, OnInit } from '@angular/core';
import {QuestionsServiceClient} from '../../services/question-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz.component',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  quizId = '';
  questions = [];

  constructor(private svc: QuestionsServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
      console.log(this.questions);
    });
  }

}
