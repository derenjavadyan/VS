import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
declare var Splitting: any;

@Directive({
  selector: '[appSplitter]',
})
export class SplitterDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}
  ngAfterViewInit(): void {
    Splitting({
      target: this.element.nativeElement,
      by: 'words',
    });
  }
}

//https://splitting.js.org/guide.html#lines
