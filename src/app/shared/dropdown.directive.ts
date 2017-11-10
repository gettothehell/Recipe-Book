import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isClicked: boolean = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') click() {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
  }
}
