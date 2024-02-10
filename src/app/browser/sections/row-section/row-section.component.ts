import { Component, Input } from '@angular/core';
import { RowSection } from '../../../types';
import { CommonModule } from '@angular/common';
import { ComponentMapper, SectionComponent } from '../../component-mapper';

@Component({
  selector: 'app-row-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './row-section.component.html',
  styleUrl: './row-section.component.css'
})
export class RowSectionComponent {

  components: SectionComponent[] = [];
  
  @Input() 
  section?: RowSection;
 
  ngOnInit() {
    this.components = ComponentMapper.toComponents(this.section?.sections);
  }

}
