import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSection1Component } from './overview-section1.component';

describe('OverviewSection1Component', () => {
  let component: OverviewSection1Component;
  let fixture: ComponentFixture<OverviewSection1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewSection1Component]
    });
    fixture = TestBed.createComponent(OverviewSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
