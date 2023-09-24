import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/data.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.css']
})

export class BrowseBooksComponent implements OnInit {

  constructor(
    private dataService : DataService
  ){}

  bookInfo : any
  bookList = this.dataService.bookList
  items: number[] = []
  
  BooksAreLoading = false
  maxItemsToShow = 100
  subjectsOfBooks = [ "history", "science", "fiction", "art" ]
  currentPage = 5
  booksPerPage = 10

  async fetchBooksBySubject(subject : string, page : number, perPage : number) { 

    let offset = (page - 1) * perPage
    const url = `https://openlibrary.org/search.json?subject=${subject}&limit=${perPage}&offset=${offset}`
    const response = await fetch(url)
    const data = await response.json()
    this.BooksAreLoading = false
    return data.docs

  }

  async displayBooks() {

    for (const subject of this.subjectsOfBooks) { 
        const books = await this.fetchBooksBySubject(subject,this.currentPage,this.booksPerPage)
        books.slice(0, this.booksPerPage).forEach((book: {title_suggest: number,cover_edition_key: string;key : string }) => {
            this.items.push(book.title_suggest)
            let cover = book.cover_edition_key
            if(cover != undefined){
              console.log(book.cover_edition_key)
              this.dataService.bookList.push( new Book(book.cover_edition_key,book.key,false,null,this.dataService.bookList.length))
            }
            
        })
      this.BooksAreLoading = false
    }

 }

  trackScroll() {
    let container = document.getElementById('gridContainer')

    if (container) { 
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight
      const clientHeight = container.clientHeight
      
      const scrollPercentage = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100)

      if(scrollTop > Math.floor((scrollHeight - clientHeight) * 0.5) && !this.BooksAreLoading){
        this.displayBooks() 
        this.BooksAreLoading = true
        this.currentPage++ 

      }
    }else {
      console.error("Element with id 'gridContainer' not found.")
    }
      
    }

  ngOnInit(): void {

    this.bookInfo = this.dataService.bookInfo
    this.displayBooks() 
    this.currentPage++ 

  }

  @HostListener('window:scroll', ['$event']) 
  onScroll(event: Event) {

    const windowHeight = document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    
    const docHeight = html.clientHeight
    const windowBottom = windowHeight + window.scrollY

    if (windowBottom >= docHeight && !this.BooksAreLoading) {
      this.BooksAreLoading = true
      this.displayBooks()
      this.currentPage++

      setTimeout(() => {
        this.BooksAreLoading = false
      }, 1000)
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

    // console.log(searchValue)
    this.dataService.bookInfo.toDisplay = true
    this.dataService.bookInfo.id = searchValue.ID
    this.dataService.bookInfo.currentIndex = searchValue.Index
    this.dataService.bookInfo.inBookshelf = searchValue.Status
    

    let searchLink = `https://openlibrary.org${searchValue.URL}/editions.json`
    let data = await fetch(searchLink)
    
    let formattedData = await data.json()
    let documentOfData = formattedData.entries[0] 
    

    this.dataService.bookInfo.title = documentOfData.title
    this.dataService.bookInfo.publish_date = documentOfData.publish_date 
    this.dataService.bookInfo.publishers = documentOfData.publishers[0]
    this.dataService.bookInfo.by_statement = documentOfData.by_statement

  }
  
}


