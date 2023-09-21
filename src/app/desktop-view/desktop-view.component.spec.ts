import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopViewComponent } from './desktop-view.component';

describe('DesktopViewComponent', () => {
  let component: DesktopViewComponent;
  let fixture: ComponentFixture<DesktopViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopViewComponent]
    });
    fixture = TestBed.createComponent(DesktopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
