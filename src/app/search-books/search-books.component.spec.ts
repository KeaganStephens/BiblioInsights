import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksComponent } from './search-books.component';

describe('SearchBooksComponent', () => {
  let component: SearchBooksComponent;
  let fixture: ComponentFixture<SearchBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBooksComponent]
    });
    fixture = TestBed.createComponent(SearchBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
