import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Job, JobsSection } from '../types';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'ps-jobs-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './jobs-section.component.html',
  styleUrl: './jobs-section.component.css'
})
export class JobsSectionComponent {

  @Input() section?: JobsSection;

  selectedJob?: Job;

  onClick($event: MouseEvent, job: Job) {
    this.selectedJob = job;
  }
}
