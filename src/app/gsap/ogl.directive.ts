import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import {
  Camera,
  Renderer,
  Transform,
  Box,
  Program,
  Mesh,
} from 'ogl-typescript';

@Directive({
  selector: '[appOgl]',
})
export class OglDirective implements AfterViewInit, OnInit {
  private renderer: any = new Renderer();
  private gl: any;

  constructor(private element: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.onResize();
  }
  ngAfterViewInit(): void {
    this.gl = this.renderer.gl;
    this.render.appendChild(this.element.nativeElement, this.gl.canvas);
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    console.log(this.element.nativeElement.window.innerWidth);
  }
}
