import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {
  findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/qwzhang/modules/${moduleId}/lessons`)
      .then(response => response.json())

  deleteLessons = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/qwzhang/lessons/${lessonId}`, {
      method: 'DELETE'
    }).then(response => response.json())

  createLessonForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/qwzhang/modules/${moduleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Lesson'}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())


  updateLesson = (lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/qwzhang/lessons/${lesson._id}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
}
