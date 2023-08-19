import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OglTestComponent } from './ogl-test.component';

describe('OglTestComponent', () => {
  let component: OglTestComponent;
  let fixture: ComponentFixture<OglTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OglTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OglTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
