import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasScreenComponent } from './politicas-screen.component';

describe('PoliticasScreenComponent', () => {
  let component: PoliticasScreenComponent;
  let fixture: ComponentFixture<PoliticasScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticasScreenComponent]
    });
    fixture = TestBed.createComponent(PoliticasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
