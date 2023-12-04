import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugandoScreenComponent } from './jugando-screen.component';

describe('JugandoScreenComponent', () => {
  let component: JugandoScreenComponent;
  let fixture: ComponentFixture<JugandoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugandoScreenComponent]
    });
    fixture = TestBed.createComponent(JugandoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
