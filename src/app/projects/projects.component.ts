import {Component, OnInit, Injectable} from '@angular/core';
import {InputText} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css'],
  directives: [InputText],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  // msgs: Message[] = [];

  constructor(/*private projectService: ProjectService*/) {
    // this.projectService.logSmthng('');
  }

  ngOnInit() {
    // this.projectService.getProjects().then(projects=> console.log(projects));
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
    // this.projects.push({
    //   id: 2, name: 'First one', summary: 'the First project', details: 'some description'
    // })
    // this.projectService.logSmthng('init');
  }

  // selectProject(project: Project) {
  //   console.info('Some message');
  //   // this.msgs = [];
  //   // this.msgs.push({severity:'info', summary:'project Select', detail:'Vin: ' + project.name});
  // }

}


@Injectable()
export class ProjectService {
  getProjects() {
    // return Promise.resolve(PROJECTS);
  }

  logSmthng(text: string) {
    console.info('log something', text);
  }
}


export const PROJECTS: Project[] = [
  {
    id: 1, name: 'First one', summary: 'the First project', details: 'some description'
  }
];

export interface Project {
  id: number;
  name: string;
  summary: string;
  details: string;
}

class Message {

}
