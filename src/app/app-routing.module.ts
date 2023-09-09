import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadingProgressTrackerComponent } from './reading-progress-tracker/reading-progress-tracker.component';
import { VirtualBookshelfComponent } from './virtual-bookshelf/virtual-bookshelf.component';
import { VbBookshelfComponent } from './virtual-bookshelf/vb-bookshelf/vb-bookshelf.component';
import { VbCurrentlyReadingComponent } from './virtual-bookshelf/vb-currently-reading/vb-currently-reading.component';
import { VbToBeReadComponent } from './virtual-bookshelf/vb-to-be-read/vb-to-be-read.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { SearchBooksComponent } from './search-books/search-books.component';

const routes: Routes = [
  { path: 'search', component: SearchBooksComponent},
  { path: '', component: HomeComponent },
  { path: 'Tracker', component: ReadingProgressTrackerComponent },
  { path: 'browse', component: BrowseBooksComponent },
  { path: 'BookShelf', component: VirtualBookshelfComponent, 
  children: [
    {
      path: '',
      redirectTo: 'read', // This sets the default route to 'read'
      pathMatch: 'full',
    },
    { path: 'read', component: VbBookshelfComponent, },
    { path: 'currently-reading', component: VbCurrentlyReadingComponent },
    { path: 'to-be-read', component: VbToBeReadComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
