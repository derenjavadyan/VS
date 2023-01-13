import { Component, AfterViewInit, OnInit } from '@angular/core';
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
export class OglComponent implements OnInit, AfterViewInit {
  public renderer = new Renderer({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  public gl = this.renderer.gl;
  public camera = new Camera(this.gl, {
    fov: 35,
    aspect: this.gl.canvas.width / this.gl.canvas.height,
  });

  constructor() {}

  ngOnInit(): void {
    this.cube();
  }

  ngAfterViewInit(): void {}

  cube() {
    const renderer = new Renderer();
    const gl = renderer.gl;
    document.body.appendChild(gl.canvas);

    const camera = new Camera(gl);
    camera.position.z = 5;

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.perspective({
        aspect: gl.canvas.width / gl.canvas.height,
      });
    }
    window.addEventListener('resize', resize, false);
    resize();

    const scene = new Transform();

    const geometry = new Box(gl);

    const program = new Program(gl, {
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

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    requestAnimationFrame(update);
    function update() {
      requestAnimationFrame(update);

      mesh.rotation.y -= 0.04;
      mesh.rotation.x += 0.03;
      renderer.render({ scene, camera });
    }
  }
}
