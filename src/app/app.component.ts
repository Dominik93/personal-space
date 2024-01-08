import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationService } from './configuration.service';
import { Configuration } from './types';
import { HeaderComponent } from './header/header.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { Item, MenuComponent } from './menu/menu.component';
import { TimelineSectionComponent } from './timeline-section/timeline-section.component';
import { ItemsSectionComponent } from './items-section/items-section.component';

export type SectionComponent = {
  type: any;
  inputs: any;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,

    NgbModule,

    HeaderComponent,

    MenuComponent,

    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  components: SectionComponent[] = [];

  configuration: Configuration = {
    menuSection: {
      title: "",
      style: "ms-auto"
    },
    sections: []
  }

  items: Item[] = [];

  constructor(
    private viewportScroller: ViewportScroller,
    @Inject("ConfigurationService") private configurationService: ConfigurationService) {
  }

  ngOnInit() {
    this.configurationService.getConfiguration()
      .subscribe(value => {
        this.configuration = value;
        Object.keys(this.configuration.sections).forEach(key => {
          const section = this.configuration.sections[key];
          const type = this.toType(section);
          if (type) this.components.push({ type: type, inputs: { section: section } });
          this.items.push({
            show: !!section,
            label: section?.label,
            anchor: section?.anchor
          });
        })

      });
  }

  onClick(event: string): void {
    this.viewportScroller.scrollToAnchor(event);
  }

  private toType(section: any) {
    switch (section.type) {
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
