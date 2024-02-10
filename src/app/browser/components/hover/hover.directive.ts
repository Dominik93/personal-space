import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hover-style]',
  standalone: true
})
export class HoverDirective {

  private styles: any;
  private readonly att: string = "style";

  constructor(public elementRef: ElementRef) { }
  @Input('hover-style') hoverStyle: any;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.styles = this.elementRef.nativeElement.getAttribute(this.att);
    this.elementRef.nativeElement.setAttribute(this.att, this.hoverStyle);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.setAttribute(this.att, this.styles);
  }

}
