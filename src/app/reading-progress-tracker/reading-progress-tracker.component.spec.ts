import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingProgressTrackerComponent } from './reading-progress-tracker.component';

describe('ReadingProgressTrackerComponent', () => {
  let component: ReadingProgressTrackerComponent;
  let fixture: ComponentFixture<ReadingProgressTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadingProgressTrackerComponent]
    });
    fixture = TestBed.createComponent(ReadingProgressTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
