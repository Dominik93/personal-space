import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SelectedSectionService } from '../selected-section.service';
import { ComponentMapper } from '../component-mapper';

@Component({
  selector: 'ps-configurable-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './configurable-section.component.html',
  styleUrl: './configurable-section.component.css'
})
export class ConfigurableSectionComponent {

  @Input()
  section: any;
  
  selected: boolean = false;

  constructor(private selectedSectionService: SelectedSectionService) {
    selectedSectionService.getSelectedSection().subscribe(value => {
      this.selected = value.id === this.section.id
    }); 
  }

  onSectionClick() {
    this.selected = true;
    this.selectedSectionService.setSelectedSection(this.section);
  }

  onAddSectionClick() {
    this.section.sections['name-' + Object.keys(this.section.sections).length] = ComponentMapper.toEmptyModel('BLANK');
  }

}
