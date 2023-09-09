import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbBookshelfComponent } from './vb-bookshelf.component';

describe('VbBookshelfComponent', () => {
  let component: VbBookshelfComponent;
  let fixture: ComponentFixture<VbBookshelfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VbBookshelfComponent]
    });
    fixture = TestBed.createComponent(VbBookshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
