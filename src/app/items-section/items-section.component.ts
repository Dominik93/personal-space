import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ItemsSection } from '../types';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SpaceComponent } from '../space/space.component';

@Component({
  selector: 'ps-items-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SpaceComponent, NgbTooltipModule],
  templateUrl: './items-section.component.html',
  styleUrl: './items-section.component.css'
})
export class ItemsSectionComponent {

  @Input() section?: ItemsSection;

  padding: any[] = [];

  ngOnInit(): void {
    const items = this.section?.items.length ?? 0;
    const emptyBlocks = 10 - items;
    this.padding = new Array(Math.floor(emptyBlocks / 2)).fill(0)
  }
}
