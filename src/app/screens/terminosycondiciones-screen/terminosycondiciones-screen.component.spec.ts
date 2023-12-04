import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosycondicionesScreenComponent } from './terminosycondiciones-screen.component';

describe('TerminosycondicionesScreenComponent', () => {
  let component: TerminosycondicionesScreenComponent;
  let fixture: ComponentFixture<TerminosycondicionesScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminosycondicionesScreenComponent]
    });
    fixture = TestBed.createComponent(TerminosycondicionesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
