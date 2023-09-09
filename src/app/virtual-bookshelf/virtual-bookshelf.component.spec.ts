import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualBookshelfComponent } from './virtual-bookshelf.component';

describe('VirtualBookshelfComponent', () => {
  let component: VirtualBookshelfComponent;
  let fixture: ComponentFixture<VirtualBookshelfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualBookshelfComponent]
    });
    fixture = TestBed.createComponent(VirtualBookshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
