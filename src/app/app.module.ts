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

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseNavigatorComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
