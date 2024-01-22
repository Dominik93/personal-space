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
    details: { content: "" }
  };

  ngOnInit(): void {
    if (this.section) {
      this.selectedEvent = this.section.eventsContainer.events[0];
    }
  }

  onClick($event: MouseEvent, event: Event) {
    this.selectedEvent = event;
  }

}