import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TimelineSection, Event } from '../../types';
import { SpaceComponent } from '../../components/space/space.component';
import { HoverDirective } from '../../components/hover/hover.directive';
import { ParagraphComponent } from '../../components/paragraph/paragraph.component';

@Component({
  selector: 'ps-timeline-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SpaceComponent, ParagraphComponent, HoverDirective],
  templateUrl: './timeline-section.component.html',
  styleUrl: './timeline-section.component.css'
})
export class TimelineSectionComponent implements OnInit {

  @Input() section?: TimelineSection;

  selectedEvent: Event = {
    name: "",
    description: "",
    subEvents: [],
    details: { content: "" }
  };

  selectedSubEvent: Event = {
    name: "",
    description: "",
    subEvents: [],
    details: { content: "" }
  };

  ngOnInit(): void {
    if (this.section) {
      this.selectedEvent = this.section.eventsContainer.events[0];
      if (this.selectedEvent.subEvents.length > 0) {
        this.selectedSubEvent = this.selectedEvent.subEvents[0]
      }
    }
  }

  onEventClick($event: MouseEvent, event: Event) {
    this.selectedEvent = event;
    if (this.selectedEvent.subEvents.length > 0) {
      this.selectedSubEvent = this.selectedEvent.subEvents[0]
    }
  }

  onSubEventClick($event: MouseEvent, event: Event) {
    this.selectedSubEvent = event;
  }
}
