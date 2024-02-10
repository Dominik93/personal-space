import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Value = {
  type: string,
  label: string,
  value: string,
}

@Component({
  selector: 'ps-section-values',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './section-values.component.html',
  styleUrl: './section-values.component.css'
})
export class SectionValuesComponent {

  values: Value[] = []

  @Output() changed = new EventEmitter<any>();

  constructor() { }

  @Input()
  set section(section: any) {
    this.values = [];
    Object.keys(section).forEach(key => {
      const label = key
      const value = section[key];
      const type = typeof value;
      this.values.push({ type: type, label: label, value: this.mapToValue(type, value) });
    })
  }

  onSave() {
    const section: any = {};
    this.values.forEach(value => {
      section[value.label] = this.mapToObject(value.type, value.value);
    })
    this.changed.emit(section);
  }

  private mapToValue(type: string, value: any) {
    if (type === 'object') {
      return JSON.stringify(value);
    }

    return value;
  }
  
  private mapToObject(type: string, value: any) {
    if (type === 'object') {
      return JSON.parse(value);
    }

    return value;
  }

}