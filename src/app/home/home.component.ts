import { Component } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';


@Component({
  selector: 'app-home',
  imports: [EducationComponent,WorkExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
