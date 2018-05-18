import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterNavComponent } from './outer-nav.component';

describe('OuterNavComponent', () => {
  let component: OuterNavComponent;
  let fixture: ComponentFixture<OuterNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
