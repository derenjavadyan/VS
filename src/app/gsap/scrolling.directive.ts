import {
  Directive,
  AfterViewInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { AnimationService } from '../../service/animations/animation.service';
import { gsap } from 'gsap';

@Directive({
  selector: '[appScrolling]',
})
export class ScrollingDirective implements AfterViewInit {
  @Output() body = new EventEmitter();
  public bodyScroll?: string;

  constructor(private main: ElementRef) {}
  ngAfterViewInit(): void {
    let sx = 0;
    let sy = 0;

    let dx = sx;
    let dy = sy;

    this.bodyScroll = this.main.nativeElement.clientHeight + 'px';
    this.body.emit(this.bodyScroll);

    this.main.nativeElement.style.position = 'fixed';
    this.main.nativeElement.style.top = 0;
    this.main.nativeElement.style.left = 0;
    this.main.nativeElement.style.right = 0;

    window.addEventListener('scroll', scroll);

    function scroll() {
      sx = window.pageXOffset;
      sy = window.pageYOffset;
    }

    const render = () => {
      dx = gsap.utils.interpolate(dx, sx, 0.1);
      dy = gsap.utils.interpolate(dy, sy, 0.1);

      dx = Math.floor(dx * 100) / 100;
      dy = Math.floor(dy * 100) / 100;

      this.main.nativeElement.style.transform = `translate(-${dx}px, -${dy}px)`;
      window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);
  }
}
