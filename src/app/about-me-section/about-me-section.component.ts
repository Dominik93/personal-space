import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutMeSection } from '../types';

@Component({
  selector: 'ps-about-me-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.css'
})
export class AboutMeSectionComponent {

  @Input() section?: AboutMeSection;
  
}
