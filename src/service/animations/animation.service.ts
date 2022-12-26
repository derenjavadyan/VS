import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  //scrolling
  public bodyScroll: any;
  constructor() {}

  update() {
    window.requestAnimationFrame(this.update.bind(this));
  }

  //animation
  tl = gsap.timeline();

  fadeIn(background: string, text: string, icon: string) {
    this.tl
      .to(background, {
        backgroundColor: '#2929cc',
      })
      .to(
        text,
        {
          color: '#fff',
        },
        '<'
      )
      .to(
        icon,
        {
          autoAlpha: 1,
        },
        '<'
      );

    this.tl.restart();
  }

  fadeOut() {
    this.tl.reverse();
  }

  //Observer
  observer(host: any) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('service enter');
        } else {
          console.log('service leave');
        }
      });
      observer.observe(host.nativeElement);
    });
  }

  animateIn(gClass: any) {
    gsap.fromTo(
      gClass,
      {
        autoAlpha: 0,
        y: '40px',
      },
      {
        autoAlpha: 1,
        duration: 1.5,
        delay: 0.5,
        y: '0px',
      }
    );
    console.log(gClass);
  }

  // animateSet(gClass: string) {
  //   gsap.set(gClass, {
  //     autoAlpha: 0,
  //     y: '40px',
  //   });
  // }
}
