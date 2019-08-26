import { CoursesService } from '../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses;
  constructor(service: CoursesService) { 
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

}