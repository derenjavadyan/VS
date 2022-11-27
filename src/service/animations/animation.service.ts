import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {}

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
}
