import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-vb-bookshelf',
  templateUrl: './vb-bookshelf.component.html',
  styleUrls: ['./vb-bookshelf.component.css']
})
export class VbBookshelfComponent {
  booksInLibrary: string[] = []; // Initialize the array in this component

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.booksInLibrary = this.dataService.booksInLibrary; // Assign the value from DataService to this component's array
  }

  changeRoute() {
    this.router.navigate(['/browse']);
  }
}
