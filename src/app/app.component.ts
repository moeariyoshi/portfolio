import { Component } from '@angular/core';
import { ResumeService } from "./shared/resume.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  //constructor(private resume: ResumeService){}
}
