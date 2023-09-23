import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadingProgressTrackerComponent } from './reading-progress-tracker/reading-progress-tracker.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { OverviewComponent } from './overview/overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Import BrowserAnimationsModule
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MobileBarComponent } from './mobile-bar/mobile-bar.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { OverviewSection1Component } from './overview/overview-section1/overview-section1.component';
import { OverviewSection2Component } from './overview/overview-section2/overview-section2.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadingProgressTrackerComponent,
    SidebarComponent,
    BrowseBooksComponent,
    SearchBooksComponent,
    OverviewComponent,
    MobileBarComponent,
    BookmarksComponent,
    OverviewSection1Component,
    OverviewSection2Component,
    MobileViewComponent,
    DesktopViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule to the imports array
    MatSnackBarModule, // Add MatSnackBarModule to the imports array
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
