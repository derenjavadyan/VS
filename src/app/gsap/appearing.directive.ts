import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appAppearing]',
})
export class AppearingDirective implements AfterViewInit {
  @Input() delay: number = 0;
  @Input() className: string = '';

  constructor(private elemet: ElementRef) {}

  spanAnime() {
    gsap.fromTo(
      this.className,
      {
        autoAlpha: 0,
        y: '18px',
      },
      {
        autoAlpha: 1,
        duration: 1.5,
        delay: this.delay,
        y: '0px',
        stagger: 0.1,
      }
    );
  }

  paraAnime() {
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

  observer() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (this.className === 'span') {
            this.spanAnime();
          } else {
            this.paraAnime();
          }
        }
      });
    });
    observer.observe(this.elemet.nativeElement);
  }

  ngAfterViewInit() {
    this.observer();
  }
}
