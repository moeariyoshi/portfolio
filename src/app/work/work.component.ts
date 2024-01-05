import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }

}
