import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleIconToggleComponent } from './simple-icon-toggle.component';

describe('SimpleIconToggleComponent', () => {
  let component: SimpleIconToggleComponent;
  let fixture: ComponentFixture<SimpleIconToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleIconToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleIconToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
