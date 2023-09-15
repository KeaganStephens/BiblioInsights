import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  constructor(private dataService: DataService,
    ){
  }

  bookInfo : any
  // gridContainer = document.querySelector('.grid-containerInfo');
  elements : any
  containerElement : any
  notesHeight : any

  ngOnInit() {
    this.checkIfContentLoaded();
    this.bookInfo = this.dataService.bookInfo; // Assign the value from DataService to this component's array
  }

  closeOverview(){
    this.dataService.bookInfo.toDisplay = false
  }

  removeFromLibrary(data : any){
    // console.log(data)
    this.bookInfo.inBookshelf = !this.bookInfo.inBookshelf
    this.dataService.booksInLibrary.splice(this.dataService.bookList[this.dataService.bookInfo.currentIndex][3], this.dataService.bookList[this.dataService.bookInfo.currentIndex][3])
    // console.log(this.dataService.booksInLibrary)
  }

  addToLibrary(data : any){
    console.log(data)
    this.bookInfo.inBookshelf = !this.bookInfo.inBookshelf
    this.dataService.bookList[this.dataService.bookInfo.currentIndex][3] = this.dataService.booksInLibrary.length
    this.dataService.booksInLibrary.push(data.id)
    console.log(this.dataService.bookInfo)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfContentLoaded()
  }

  async checkIfContentLoaded() {
      // Code to execute when bookInfo.title is loaded
      this.elements = document.getElementsByClassName("grid-containerInfo");
      this.containerElement = document.getElementsByClassName("infoGrid-item-Info-container");
      if (this.elements && this.containerElement) {
        var elementsInPixels = this.elements[0].clientHeight;
        var containerElementInPixels = this.containerElement[0].clientHeight;
        this.notesHeight = containerElementInPixels - elementsInPixels;
      }
  }

}
