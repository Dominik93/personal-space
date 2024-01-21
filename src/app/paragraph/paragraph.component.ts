import { Component, Input } from '@angular/core';
import { Paragraph } from '../types';

@Component({
  selector: 'ps-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css'
})
export class ParagraphComponent {

  @Input()
  paragraph: Paragraph = {content: ""};

}
