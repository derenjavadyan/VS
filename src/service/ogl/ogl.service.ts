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
  public renderer: any;
  public gl: any;

  constructor() {}

  createRenderer() {
    this.renderer = new Renderer();
    this.gl = this.renderer.gl;
  }
}
