import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadingProgressTrackerComponent } from './reading-progress-tracker/reading-progress-tracker.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

const routes: Routes = [
  { path: 'search', component: SearchBooksComponent},
  { path: '', component: BrowseBooksComponent },
  { path: 'Tracker', component: ReadingProgressTrackerComponent },
  { path: 'browse', component: BrowseBooksComponent },
  { path: 'BookShelf', component: BookmarksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
