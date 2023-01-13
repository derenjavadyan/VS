import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OglComponent } from './ogl.component';

describe('OglComponent', () => {
  let component: OglComponent;
  let fixture: ComponentFixture<OglComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OglComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
