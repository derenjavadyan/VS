import { Component, OnInit } from '@angular/core';
import { OglService } from 'src/service/ogl/ogl.service';

@Component({
  selector: 'app-ogl',
  templateUrl: './ogl.component.html',
  styleUrls: ['./ogl.component.scss'],
})
export class OglComponent implements OnInit {
  constructor(private ogl: OglService) {}
  ngOnInit(): void {
    this.ogl.createCube();
  }
}
