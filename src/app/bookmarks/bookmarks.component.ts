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

async displayBooks() { //async 
  for (const subject of this.subjects) { //loop through subjects
      const books = await this.fetchBooksBySubject(subject,this.currentPage,this.booksPerPage); //wait for the function return a document of the img numbers
      books.slice(0, this.booksPerPage).forEach((book: { title_suggest: number,cover_edition_key: string;key : string }) => {
          this.items.push(book.title_suggest)
          let cover = book.cover_edition_key
          if(cover != undefined){
            this.dataService.bookList.push([book.cover_edition_key,book.key,false,null,this.dataService.bookList.length])
          }
          
      });
    this.isLoading = false
  }

}

trackScroll() {
  let container = document.getElementById('gridContainer');
if (container) { // Check if container is not null
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;
  const scrollPercentage = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100)
  if(scrollTop > Math.floor((scrollHeight - clientHeight) * 0.5) && !this.isLoading){
    this.displayBooks() //to display the first few books
    this.isLoading = true
    this.currentPage++ 
  }
} else {
  console.error("Element with id 'gridContainer' not found.");
}
  
}

  ngOnInit(): void {
    this.bookInfo = this.dataService.bookInfo; // Assign the value from DataService to this component's array
    this.displayBooks() //to display the first few books
    this.currentPage++ //update the page
  }

  @HostListener('window:scroll', ['$event']) 
  onScroll(event: Event) {
    // Detect when the user has scrolled to the bottom of the page.
    const windowHeight = document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.scrollY; // Use scrollY instead of pageYOffset

    if (windowBottom >= docHeight && !this.isLoading) {
      this.isLoading = true;
      this.displayBooks();
      this.currentPage++
      // Simulate a delay for loading, replace with your API call.
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
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