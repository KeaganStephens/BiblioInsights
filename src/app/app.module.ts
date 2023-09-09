import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReadingProgressTrackerComponent } from './reading-progress-tracker/reading-progress-tracker.component';
import { VirtualBookshelfComponent } from './virtual-bookshelf/virtual-bookshelf.component';
import { VbBookshelfComponent } from './virtual-bookshelf/vb-bookshelf/vb-bookshelf.component';
import { VbToBeReadComponent } from './virtual-bookshelf/vb-to-be-read/vb-to-be-read.component';
import { VbCurrentlyReadingComponent } from './virtual-bookshelf/vb-currently-reading/vb-currently-reading.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadingProgressTrackerComponent,
    VirtualBookshelfComponent,
    VbBookshelfComponent,
    VbToBeReadComponent,
    VbCurrentlyReadingComponent,
    SidebarComponent,
    BrowseBooksComponent,
    SearchBooksComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
