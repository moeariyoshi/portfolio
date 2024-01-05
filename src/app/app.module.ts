import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import {AppRoutingModule} from "./app-routing.module";
import { TimelineComponent } from './home/timeline/timeline.component';
import {ResumeService} from "./shared/resume.service";
import Typed from "typed.js";
import { IntroComponent } from './home/intro/intro.component';
import { SkillsComponent } from './home/skills/skills.component';
import { TimelineItemComponent } from './home/timeline/timeline-item/timeline-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorkComponent,
    TimelineComponent,
    IntroComponent,
    SkillsComponent,
    TimelineItemComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ResumeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
