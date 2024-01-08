import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TimelineSection, Event } from '../types';
import { SpaceComponent } from '../space/space.component';

@Component({
  selector: 'ps-timeline-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SpaceComponent],
  templateUrl: './timeline-section.component.html',
  styleUrl: './timeline-section.component.css'
})
export class TimelineSectionComponent {

  @Input() section?: TimelineSection;

  selectedEvent?: Event;

  onClick($event: MouseEvent, event: Event) {
    this.selectedEvent = event;
  }
}
