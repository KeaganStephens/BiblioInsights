import { Component } from '@angular/core';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  constructor(private dataService: DataService){
  }

  bookInfo : any

  ngOnInit() {
    this.bookInfo = this.dataService.bookInfo; // Assign the value from DataService to this component's array
  }

  closeOverview(){
    this.dataService.bookInfo.toDisplay = false
  }

  addToLibrary(data : string){
    console.log(data)
    this.dataService.booksInLibrary.push(data)
    console.log(this.dataService.booksInLibrary)
  }

}
