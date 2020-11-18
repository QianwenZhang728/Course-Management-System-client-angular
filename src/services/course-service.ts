import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
  findAllCourses = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/qwzhang/courses`)
      .then(response => response.json())

  findCourseById = (id) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/qwzhang/courses/${id}`)
      .then(response => response.json())

  deleteCourse = (id) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/qwzhang/courses/${id}`, {
      method: 'DELETE'
    })

  createCourse = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/qwzhang/courses`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Course', editing: false}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

  updateCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/qwzhang/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
}
