import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutMeSection } from '../types';
import { SpaceComponent } from '../space/space.component';

@Component({
  selector: 'ps-about-me-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SpaceComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.css'
})
export class AboutMeSectionComponent {

  @Input() section?: AboutMeSection;
  
}
