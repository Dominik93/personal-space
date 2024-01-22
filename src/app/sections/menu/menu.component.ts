import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuSection } from '../../types';

export type Item = {
  show: boolean;
  label: string;
  anchor: string;
}

@Component({
  selector: 'ps-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Input() section?: MenuSection;
  @Input() items: Item[] = [];

}
