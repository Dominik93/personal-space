import { Component, Input } from '@angular/core';
import { ColumnSection } from '../../types';
import { ComponentMapper, SectionComponent } from '../../component-mapper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-column-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './column-section.component.html',
  styleUrl: './column-section.component.css'
})
export class ColumnSectionComponent {

  components: SectionComponent[] = [];
  
  @Input() 
  section?: ColumnSection;

  ngOnInit() {
    this.components = ComponentMapper.toComponents(this.section?.sections);
  }
  
}
