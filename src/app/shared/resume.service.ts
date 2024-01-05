import {Timeline} from "./timeline.model";
import {Skill} from "./skill.model";

export class ResumeService {
  // private skills: Skill[] = [
  //   //use filter to render by type
  //   new Skill("foreign-language", "Japanese", 10),
  //   new Skill("foreign-language", "French", 7),
  //   new Skill("foreign-language", "Spanish", 4),
  //   new Skill("programming-language", "Python", 4),
  //   new Skill("programming-language", "Java", 4),
  //   new Skill("programming-language", "HTML", 4),
  //   new Skill("programming-language", "CSS", 4),
  //   new Skill("software", "Adobe Creative Cloud", 4),
  //   new Skill("software", "Microsoft Office", 4)
  // ];

  private skills: string[] = [
    //use filter to render by type
    'Japanese.',
    'French.',
    'Spanish.',
    'Python.',
    'Java.',
    'HTML.',
    'CSS.',
    'Adobe Creative Cloud.',
    'Microsoft Office.'
  ];

  private timeline: Timeline[] = [
    new Timeline("Tokyo", "Japan", 2003),
    new Timeline("Paris", "France",2008),
    new Timeline("Dhaka", "Bangladesh", 2012),
    new Timeline("Honolulu", "Hawaii", 2016),
    new Timeline("Tokyo", "Japan", 2019),
    new Timeline("Oberlin", "Ohio", 2022)
  ];


  getSkills(){
    return this.skills.slice();
  }

  getSkill(index: number){
    return this.skills[index];
  }

  getTimeline(){
    return this.timeline.slice();
  }
}
