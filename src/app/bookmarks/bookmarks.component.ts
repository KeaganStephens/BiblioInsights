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

  //a array to store the items
  isLoading = false; //to stop it form loading everything all at once 
  maxItemsToShow = 100; // Set a maximum number of items to display
  subjects = ["history", "science", "fiction", "art"]; //the subjects to pull info from
  currentPage = 8; //to keep track from what i pulled 
  booksPerPage = 10; //to know how many books are called at once

  async fetchBooksBySubject(subject : string, page : number, perPage : number) { //getting the file
    let offset = (page - 1) * perPage; //knowing where to start calling from 
    // console.log(offset)
    const url = `https://openlibrary.org/search.json?subject=${subject}&limit=${perPage}&offset=${offset}`; //a lint to fetch data from 
    const response = await fetch(url); //making a HTTP request 
    const data = await response.json(); //returns a promise that resolves with the parsed JSON data
    // console.log(data)
    this.isLoading = false
    return data.docs; //returning a array of dictionaries 
}


  ngOnInit(): void {
    this.bookInfo = this.dataService.bookInfo; // Assign the value from DataService to this component's array

    this.currentPage++ //update the page
  }


  addToLibrary(data : string){
    console.log(data)
    this.dataService.booksInLibrary.push(data)
    console.log(this.dataService.booksInLibrary)
  }

  showOverview(data : string){
    this.dataService.bookInfo.toDisplay = true
    this.dataService.bookInfo.id = data
  }

  closeOverview(){
    this.dataService.bookInfo.toDisplay = false
  }

  async getInfoFromApi(searchValue : any){
    console.log(searchValue)
    this.dataService.bookInfo.toDisplay = true
    this.dataService.bookInfo.id = searchValue[0]
    this.dataService.bookInfo.currentIndex = searchValue[4]
    this.dataService.bookInfo.inBookshelf = searchValue[2]

    let searchLink = `https://openlibrary.org${searchValue[1]}/editions.json`
    let data = await fetch(searchLink)
    let formattedData = await data.json()
    let documentOfData = formattedData.entries[0] //.key
    this.dataService.bookInfo.title = documentOfData.title
    this.dataService.bookInfo.publish_date = documentOfData.publish_date 
    this.dataService.bookInfo.publishers = documentOfData.publishers[0]
    this.dataService.bookInfo.by_statement = documentOfData.by_statement
  }

}