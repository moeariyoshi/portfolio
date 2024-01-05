import {Component, Input} from '@angular/core';
import {Timeline} from "../../../shared/timeline.model";

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css']
})

export class TimelineItemComponent{
  @Input() timeline: Timeline = new Timeline("Oberlin", "Ohio", 2003);

  constructor(){} //private recipeService: RecipeService
}
