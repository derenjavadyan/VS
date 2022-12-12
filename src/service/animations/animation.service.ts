import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { Subject } from 'rxjs';

interface scroll {
  current: number;
  target: number;
  last: number;
}

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  updateSub = new Subject();
  public scroll: scroll = {
    current: 0,
    target: 0,
    last: 0,
  };
  constructor() {
    this.update();
  }

  update() {
    let updateFrame = window.requestAnimationFrame(this.update.bind(this));
    this.updateSub.next(updateFrame);
    // console.log(updateFrame);
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
