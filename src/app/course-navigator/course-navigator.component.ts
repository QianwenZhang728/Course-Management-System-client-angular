import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ModuleService} from '../../services/ModuleService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  courseId = '';
  selectedCourse = {title: ''};

  constructor(private courseService: CourseService,
              private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      console.log(params);
      this.courseId = params.cid;
    });

    this.courseService.findCourseById(this.courseId)
      .then(course => this.selectedCourse = course);

    console.log(this.selectedCourse);
  }

}
