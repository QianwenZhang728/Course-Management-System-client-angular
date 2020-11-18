import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../../services/ModuleService';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../services/LessonService';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  courseId = '';
  moduleId = '';
  lessons = [];
  selectedLessonId = '';

  constructor(private moduleService: ModuleService,
              private activeRoute: ActivatedRoute,
              private lessonService: LessonService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.selectedLessonId = params.lid;
      if (typeof this.moduleId !== 'undefined') {
        this.lessonService.findLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }

}
