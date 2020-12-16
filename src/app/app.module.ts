import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import {FormsModule} from '@angular/forms';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {CourseService} from '../services/course-service';
import {ModuleService} from '../services/ModuleService';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { AppRoutingModule } from './app-routing.module';
import {LessonService} from '../services/LessonService';
import {QuizzesServiceClient} from '../services/quiz-service';
import {QuestionsServiceClient} from '../services/question-service';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseNavigatorComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService,
    QuizzesServiceClient,
    QuestionsServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
