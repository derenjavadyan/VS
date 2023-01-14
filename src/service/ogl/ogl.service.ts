import { Injectable } from '@angular/core';
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
  //renderer
  private renderer = new Renderer();
  private gl = this.renderer.gl;

  //camera
  private camera = new Camera(this.gl);

  //scene
  private scene = new Transform();

  //geometry & program
  // private geometry = new Box(this.gl);
  // private program = new Program(this.gl, {
  //   vertex: /* glsl */ `
  //           attribute vec3 position;

  //           uniform mat4 modelViewMatrix;
  //           uniform mat4 projectionMatrix;

  //           void main() {
  //             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //           }
  //       `,
  //   fragment: /* glsl */ `
  //           void main() {
  //             gl_FragColor = vec4(1.0);
  //           }
  //       `,
  // });

  //mesh
  // private mesh = new Mesh(this.gl, {
  //   geometry: this.geometry,
  //   program: this.program,
  // });

  constructor() {}

  //creates
  createRenderer() {
    this.renderer;
    this.gl;

    document.getElementById('canvas')?.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera;
    this.camera.position.z = 5;
  }

  createScene() {
    this.scene;
  }

  //magic
  createCube() {
    this.createRenderer();
    this.createCamera();
    this.createScene();

    //resize
    const resize = () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.perspective({
        aspect: this.gl.canvas.width / this.gl.canvas.height,
      });
    };
    resize();
    window.addEventListener('resize', resize, false);

    //geometry & program
    const geometry = new Box(this.gl);
    const program = new Program(this.gl, {
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

    //mesh
    const mesh = new Mesh(this.gl, {
      geometry: geometry,
      program: program,
    });
    mesh.setParent(this.scene);

    //update
    const update = () => {
      requestAnimationFrame(update);

      mesh.rotation.y -= 0.04;
      mesh.rotation.x += 0.03;
      this.renderer.render({ scene: this.scene, camera: this.camera });
    };
    requestAnimationFrame(update);
  }
}
