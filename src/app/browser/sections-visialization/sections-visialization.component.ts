import { Component, Input } from '@angular/core';
import { ComponentMapper, SectionComponent } from '../component-mapper';
import { Configuration } from '../../types';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'ps-sections-visialization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sections-visialization.component.html',
  styleUrl: './sections-visialization.component.css'
})
export class SectionsVisializationComponent {

  components: SectionComponent[] = [];

  @Input()
  set configuration(configuration: Configuration) {
    this.components = ComponentMapper.toComponents(configuration.sections);
  }
  
}
