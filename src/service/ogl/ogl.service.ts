import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import {
  Camera,
  Renderer,
  Transform,
  Box,
  Program,
  Mesh,
} from 'ogl-typescript';

@Injectable({
  providedIn: 'root',
})
export class OglService {
  private renderer: any = new Renderer();
  private gl: any = this.renderer.gl;
  private render!: Renderer2;
  private camera: any = new Camera(this.gl);
  private scene: any = new Transform();
  private geometry: any = new Box(this.gl);
  private program!: any;
  private mesh: any = new Mesh(this.gl, {
    geometry: this.geometry,
    program: this.program,
  });

  constructor(private rendererFactory: RendererFactory2) {
    this.render = this.rendererFactory.createRenderer(null, null);
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight,
    });
  }

  createRenderer(parent: ElementRef) {
    this.render.appendChild(parent, this.gl.canvas);
  }

  createCamera() {
    this.camera;
    this.camera.position.z = 5;
  }

  createScene() {
    this.scene;
  }

  createCube() {
    this.geometry;
    this.program = new Program(this.gl, {
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
              gl_FragColor = vec4(1.0);
            }
        `,
    });

    this.mesh;
    this.mesh.setParent(this.scene);
  }

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.renderer.render({
      camera: this.camera,
      scene: this.scene,
    });
  }
}
