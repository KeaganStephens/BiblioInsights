import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.css']
})
export class BrowseBooksComponent implements OnInit {
  constructor(
    private dataService : DataService,
    private snackbar : MatSnackBar
    ){}

  bookInfo : any
  bookList = this.dataService.bookList

  items: number[] = []; 
  

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
            // console.log([book.cover_edition_key,book.key])
            this.dataService.bookList.push([book.cover_edition_key,book.key,false,null,this.dataService.bookList.length])
          }
          
      });
    this.isLoading = false
  }

  // if (this.items.length > this.maxItemsToShow) {
  //     const itemsToRemove = this.items.length - this.maxItemsToShow;
  //     this.items.splice(0, itemsToRemove);
  //   }
}

trackScroll() {
  let container = document.getElementById('gridContainer');
// console.log(container);

if (container) { // Check if container is not null
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;
  // console.log( scrollTop,scrollHeight,clientHeight)
  // console.log( scrollTop,Math.floor((scrollHeight - clientHeight) * 0.9),clientHeight)
  // Calculate the scroll percentage
  const scrollPercentage = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100)

  // Log or use the scrollPercentage as needed
  // console.log(`Scroll Percentage: ${scrollPercentage.toFixed(2)}%`);
  if(scrollTop > Math.floor((scrollHeight - clientHeight) * 0.5) && !this.isLoading){
    this.displayBooks() //to display the first few books
    this.isLoading = true
    this.currentPage++ 
    // console.log("working")
  }
} else {
  console.error("Element with id 'gridContainer' not found.");
}
  
}

  ngOnInit(): void {
    this.bookInfo = this.dataService.bookInfo; // Assign the value from DataService to this component's array
    this.displayBooks() //to display the first few books
    this.currentPage++ //update the page
    // console.log(this.itemsR)
    // console.log(document.getElementsByClassName('grid-container'))
    // console.log(window.scrollY)
  }

  @HostListener('window:scroll', ['$event']) 
  onScroll(event: Event) {
    // Detect when the user has scrolled to the bottom of the page.
    const windowHeight = document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.scrollY; // Use scrollY instead of pageYOffset
    // console.log(window.scrollY)
    // console.log(windowBottom)

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
    // console.log(searchValue)

    let searchLink = `https://openlibrary.org${searchValue[1]}/editions.json`
    let data = await fetch(searchLink)
    // console.log(data)
    let formattedData = await data.json()
    // console.log(formattedData)
    let documentOfData = formattedData.entries[0] //.key
    // console.log(documentOfData)
    // if(searchValue[3] != null){
    //   this.dataService.bookInfo.title = searchValue[3]
    // }
    this.dataService.bookInfo.title = documentOfData.title
    this.dataService.bookInfo.publish_date = documentOfData.publish_date 
    this.dataService.bookInfo.publishers = documentOfData.publishers[0]
    this.dataService.bookInfo.by_statement = documentOfData.by_statement

    // let bookInfo = `https://openlibrary.org${documentOfData}.json`
    // let bookData = await fetch(bookInfo)
    // let formattedBookData = await bookData.json()
    // console.log(formattedBookData)
  }
  
}


