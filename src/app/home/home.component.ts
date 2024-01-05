import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js';
import {ResumeService} from "../shared/resume.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private resume: ResumeService) {
  }
  ngOnInit() {
    const options = {
      strings: ['apple', 'orange', 'lemon'],
        //Array.from(this.resume.getSkills(), (skill) => skill.name),
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

   // const typed = new Typed('typed-element', options);
  }
}
