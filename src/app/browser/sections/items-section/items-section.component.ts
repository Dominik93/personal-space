import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ItemsSection } from '../../../types';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SpaceComponent } from '../../components/space/space.component';

@Component({
  selector: 'ps-items-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SpaceComponent, NgbTooltipModule],
  templateUrl: './items-section.component.html',
  styleUrl: './items-section.component.css'
})
export class ItemsSectionComponent {

  readonly MAX_SIZE: number = 5;

  @Input() section?: ItemsSection;

  padding: string = "col-1";

  size: string = "col-2";

  ngOnInit(): void {
    const itemsCount = this.section?.items.length ?? 0;
    const emptyBlocks = 10 - itemsCount;
    this.padding = "col-" + Math.ceil(emptyBlocks / Math.max(itemsCount, 2))
    this.size = itemsCount > this.MAX_SIZE ? "col-1" : "col-2"
  }
}
