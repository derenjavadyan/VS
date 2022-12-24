import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appAppearing]',
})
export class AppearingDirective implements AfterViewInit {
  @Input() delay = 0;

  constructor(private elemet: ElementRef) {}

  observer() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            this.elemet.nativeElement,
            {
              autoAlpha: 0,
              y: '40px',
            },
            {
              autoAlpha: 1,
              duration: 1.5,
              delay: this.delay,
              y: '0px',
            }
          );
        }
      });
    });
    observer.observe(this.elemet.nativeElement);
  }

  ngAfterViewInit() {
    this.observer();
  }
}
