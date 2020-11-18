import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses = [];
  courseId = '';
  selectedCourse = {
    title: ''
  };

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course._id)
      .then(status => this.courses = this.courses.filter(c => c._id !== course._id))

  createCourse = () =>
    this.courseService.createCourse()
      .then(course => this.courses.push(course))

  editCourse = (course) =>
    course.editing = true

  saveCourse = (course) => {
    course.editing = false;
    this.courseService.updateCourse(course);
  }

  selectCourse = (course) => {
    this.selectedCourse = course;
    // this.moduleService.findModulesForCourse(course._id)
    //   .then(modules => this.modules = modules);
  }

  constructor(private activedRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      this.courseId = params.cid;
    });

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
