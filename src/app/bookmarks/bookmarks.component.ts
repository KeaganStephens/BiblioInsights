import { Component, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  constructor(
    private dataService : DataService,
    private snackbar : MatSnackBar
    ){}

  bookInfo : any
  

  items: number[] = []; 
  bookList = this.dataService.booksInLibrary
  }