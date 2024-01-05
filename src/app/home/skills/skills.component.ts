import {Component, OnInit} from '@angular/core';
import Typed from "typed.js";
import {ResumeService} from "../../shared/resume.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private resume: ResumeService) {
  }

  ngOnInit() {
    const options = {
      strings: this.resume.getSkills(),
      typeSpeed: 80,
      backSpeed: 80,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }
}
