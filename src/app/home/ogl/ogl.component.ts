import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Renderer2,
  HostListener,
} from '@angular/core';
import {
  Renderer,
  Camera,
  Transform,
  Box,
  Program,
  Mesh,
} from 'ogl-typescript';

@Component({
  selector: 'app-ogl',
  templateUrl: './ogl.component.html',
  styleUrls: ['./ogl.component.scss'],
})
export class OglComponent implements AfterViewInit {
  public renderer = new Renderer({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  public gl = this.renderer.gl;
  public camera = new Camera(this.gl, {
    fov: 35,
    aspect: this.gl.canvas.width / this.gl.canvas.height,
  });

  @ViewChild('canvas') canvas!: ElementRef;

  public scene = new Transform();
  public geometry = new Box(this.gl);
  public program = new Program(this.gl, {
    vertex: /* glsl */ `
        attribute vec3 position;

        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;

        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragment: /* glsl */ `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
        }
    `,
  });

  public mesh = new Mesh(this.gl, {
    geometry: this.geometry,
    program: this.program,
  });

  constructor(public renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer2.appendChild(this.canvas.nativeElement, this.gl.canvas);

    this.renderer;
    this.gl;
    this.camera;
    this.camera.position.z = 5;

    this.scene;
    this.geometry;
    this.program;
    this.mesh;
    this.mesh.setParent(this.scene);

    this.resize();
    this.mesh.setParent(this.scene);
    requestAnimationFrame(this.update);
  }

  @HostListener('window:resize')
  resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height,
    });
  }

  update() {
    requestAnimationFrame(this.update);
    this.mesh.rotation.y -= 0.04;
    this.mesh.rotation.x += 0.03;
    this.renderer.render({ scene: this.scene, camera: this.camera });
  }
}
