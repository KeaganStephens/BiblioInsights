import { Component, HostListener } from '@angular/core';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-overview-section1',
  templateUrl: './overview-section1.component.html',
  styleUrls: ['./overview-section1.component.css']
})
export class OverviewSection1Component {

  constructor(private dataService: DataService,
    ){
  }

  bookInfo : any

  ngOnInit() {
    this.bookInfo = this.dataService.bookInfo; // Assign the value from DataService to this component's array
  }

  closeOverview(){
    this.dataService.bookInfo.toDisplay = false
  }

  removeFromLibrary(data : any){
    console.log(this.dataService.booksInLibrary)
    this.bookInfo.inBookshelf = false
    this.dataService.bookList[this.dataService.bookInfo.currentIndex][2] = false
    let removeItem = this.dataService.bookList[this.dataService.bookInfo.currentIndex][3]
    console.log(removeItem)
    this.dataService.booksInLibrary.splice(removeItem,1)
    
    // console.log(this.dataService.booksInLibrary)
  }

  addToLibrary(data : any){
    console.log(data)
    this.bookInfo.inBookshelf = true
    this.dataService.bookList[this.dataService.bookInfo.currentIndex][2] = true
    this.dataService.bookList[this.dataService.bookInfo.currentIndex][3] = this.dataService.booksInLibrary.length
    this.dataService.booksInLibrary.push(this.dataService.bookList[this.dataService.bookInfo.currentIndex])
    console.log(this.dataService.bookInfo)
  }

}
