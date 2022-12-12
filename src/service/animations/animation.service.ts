import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {}

  update() {
    let updateFrame = window.requestAnimationFrame(this.update.bind(this));
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
}
