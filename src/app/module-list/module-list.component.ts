import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../services/ModuleService';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  courseId = '';
  modules = [];
  selectedModuleId = '';

  // createModule = (course) =>
  //   this.moduleService.createModuleForCourse(course._id)
  //     .then(module => this.modules.push(module))
  //
  // deleteModule = (module) =>
  //   this.moduleService.deleteModules(module._id)
  //     .then(status => this.modules = this.modules.filter(m => m._id !== module._id))
  //
  // saveModule = (module) =>
  //   this.moduleService.updateModule(module)
  //     .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m))

  constructor(private moduleService: ModuleService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.courseId = params.cid;
      this.selectedModuleId = params.mid;
      if (typeof this.courseId !== 'undefined') {
        this.moduleService.findModulesForCourse(this.courseId)
          .then(modules => this.modules = modules);
      }
    });
  }

}
