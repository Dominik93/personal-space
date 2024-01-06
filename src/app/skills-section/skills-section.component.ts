import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SkillsSection } from '../types';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'ps-skills-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent implements OnInit {

  @Input() section?: SkillsSection;

  padding: any[] = [];

  ngOnInit(): void {
    const items = this.section?.skills.length ?? 0;
    const emptyBlocks = 10 - items;
    this.padding = new Array(Math.floor(emptyBlocks / 2)).fill(0)
    console.log('ngon', this.padding)

  }
}
