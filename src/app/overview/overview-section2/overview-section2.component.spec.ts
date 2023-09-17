import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSection2Component } from './overview-section2.component';

describe('OverviewSection2Component', () => {
  let component: OverviewSection2Component;
  let fixture: ComponentFixture<OverviewSection2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewSection2Component]
    });
    fixture = TestBed.createComponent(OverviewSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
