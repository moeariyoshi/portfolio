import {Component, OnInit} from '@angular/core';
import {Timeline} from "../../shared/timeline.model";
import {ResumeService} from "../../shared/resume.service";
import * as AOS from "aos";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit{
  timeline: Timeline[] = [];

  constructor(private resume: ResumeService) {
  }

  ngOnInit(){
    this.timeline = this.resume.getTimeline();
    AOS.init();
  }
}
