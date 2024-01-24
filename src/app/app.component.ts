import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationService } from './configuration.service';
import { Configuration, Grid } from './types';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { AboutMeSectionComponent } from './sections/about-me-section/about-me-section.component';
import { SkillsSectionComponent } from './sections/skills-section/skills-section.component';
import { Item, MenuComponent } from './sections/menu/menu.component';
import { TimelineSectionComponent } from './sections/timeline-section/timeline-section.component';
import { ItemsSectionComponent } from './sections/items-section/items-section.component';
import { SpaceComponent } from './components/space/space.component';
import { Title } from '@angular/platform-browser';

export type SectionComponent = {
  type: any;
  inputs: any;
  grid: Grid;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,

    NgbModule,

    HeaderComponent,
    SpaceComponent,

    MenuComponent,

    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  components: SectionComponent[] = [];

  configuration: Configuration = {
    title: "",
    layout: {
      type: 'SIMPLE'
    },
    sections: []
  }

  constructor(
    @Inject("ConfigurationService") private configurationService: ConfigurationService,
    private title: Title) {
  }

  ngOnInit() {
    this.configurationService.getConfiguration()
      .subscribe(value => {
        this.title.setTitle(value.title);
        this.configuration = value;
        Object.keys(this.configuration.sections).forEach(key => {
          const section = this.configuration.sections[key];
          const type = this.toType(section);
          if (type) this.components.push({ type: type, inputs: { section: section }, grid: section.grid });
        })
      });
  }

  private toType(section: any) {
    switch (section.type) {
      case 'MENU': 
        return MenuComponent;
      case 'ABOUT_ME':
        return AboutMeSectionComponent;
      case 'PROJECTS':
        return ProjectsSectionComponent;
      case 'TIMELINE':
        return TimelineSectionComponent;
      case 'SKILLS':
        return SkillsSectionComponent;
      case 'ITEMS':
        return ItemsSectionComponent;
      default:
        return;
    }
  }

}
