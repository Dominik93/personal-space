import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TimelineSection, Event } from '../types';
import { SpaceComponent } from '../space/space.component';
import { HoverDirective } from '../hover/hover.directive';

@Component({
  selector: 'ps-timeline-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SpaceComponent, HoverDirective],
  templateUrl: './timeline-section.component.html',
  styleUrl: './timeline-section.component.css'
})
export class TimelineSectionComponent implements OnInit {
  
  @Input() section?: TimelineSection;
  
  selectedEvent?: Event;

  ngOnInit(): void {
    this.selectedEvent = this.section?.events[0];
  }

  onClick($event: MouseEvent, event: Event) {
    this.selectedEvent = event;
  }

  selectedStyle(name: any): { [klass: string]: any; } {
    console.log("selectedStyle");
    if(!this.section) {
      return {};
    }
    const ret =  this.selectedEvent?.name === name ? this.section.selectedStyle : {}
    
    console.log("selectedStyle", ret);
    return ret
  }
}
