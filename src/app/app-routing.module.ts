import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {path: '', component: CourseListComponent},
  {path: 'table/courses', component: CourseListComponent},
  {path: 'courses/:cid/modules', component: CourseNavigatorComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: CourseNavigatorComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseNavigatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
