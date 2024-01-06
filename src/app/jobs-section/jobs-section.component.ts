import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JobsSection } from '../types';
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

}
