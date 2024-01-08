import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillsSection } from '../types';
import { HeaderComponent } from '../header/header.component';
import { SpaceComponent } from '../space/space.component';

@Component({
  selector: 'ps-skills-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SpaceComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {

  @Input() section?: SkillsSection;

}
