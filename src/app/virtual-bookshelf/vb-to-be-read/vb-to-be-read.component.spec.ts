import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbToBeReadComponent } from './vb-to-be-read.component';

describe('VbToBeReadComponent', () => {
  let component: VbToBeReadComponent;
  let fixture: ComponentFixture<VbToBeReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VbToBeReadComponent]
    });
    fixture = TestBed.createComponent(VbToBeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
