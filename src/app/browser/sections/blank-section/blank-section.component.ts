import { Component, Input } from '@angular/core';
import { Section } from '../../../types';

@Component({
  selector: 'app-blank-section',
  standalone: true,
  imports: [],
  templateUrl: './blank-section.component.html',
  styleUrl: './blank-section.component.css'
})
export class BlankSectionComponent {

  @Input()
  section?: Section;
  
}
