import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseBooksComponent } from './browse-books.component';

describe('BrowseBooksComponent', () => {
  let component: BrowseBooksComponent;
  let fixture: ComponentFixture<BrowseBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseBooksComponent]
    });
    fixture = TestBed.createComponent(BrowseBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
