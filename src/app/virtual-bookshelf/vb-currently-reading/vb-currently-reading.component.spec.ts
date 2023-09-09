import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbCurrentlyReadingComponent } from './vb-currently-reading.component';

describe('VbCurrentlyReadingComponent', () => {
  let component: VbCurrentlyReadingComponent;
  let fixture: ComponentFixture<VbCurrentlyReadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VbCurrentlyReadingComponent]
    });
    fixture = TestBed.createComponent(VbCurrentlyReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
