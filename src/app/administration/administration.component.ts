import { Component, Inject } from '@angular/core';
import { Configuration } from '../types';
import { CommonModule, KeyValue } from '@angular/common';
import { ConfigurableSectionComponent } from './configurable-section/configurable-section.component';
import { SelectedSectionService } from './selected-section.service';
import { SectionValuesComponent } from './section-values/section-values.component';
import { ComponentMapper } from './component-mapper';
import { ConfigurationService } from '../browser/configuration.service';
import { SectionsVisializationComponent } from '../browser/sections-visialization/sections-visialization.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'ps-administration',
  standalone: true,
  imports: [CommonModule, ConfigurableSectionComponent, SectionValuesComponent, SectionsVisializationComponent],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {

  preview: boolean = false;

  configuration: Configuration = {
    id: Date.now().toString(),
    title: "Pick a name",
    sections: {
    }
  };

  selectedSection: any = this.configuration;
  selected: boolean = true;

  constructor(private selectedSectionService: SelectedSectionService,
    private langaugeService: LanguageService,
    @Inject("ConfigurationService") private configurationService: ConfigurationService) {
    selectedSectionService.getSelectedSection().subscribe(value => {
      this.selectedSection = value;
      this.selected = value.id === this.configuration.id
    });
  }
  
  ngOnInit() {
    this.configurationService.getConfiguration(this.langaugeService.getBrowserLanguage())
      .subscribe(value => {
        this.configuration = value;
      });
  }

  onPreviewClick() {
    this.preview = !this.preview;
  }

  onCanvasSelection() {
    this.selected = true;
    this.selectedSection = this.configuration;
    this.selectedSectionService.setSelectedSection(this.configuration);
  }

  onChanged(section: any) {
    if (section.type !== this.selectedSection.type) {
      section = ComponentMapper.toEmptyModel(section.type);
    }
    Object.keys(section).forEach(element => {
      this.selectedSection[element] = section[element];
    });;
  }

  onAddSectionClick() {
    this.configuration.sections['name-' + Object.keys(this.configuration.sections).length] = ComponentMapper.toEmptyModel('BLANK');
  }
  
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
