import { Component } from '@angular/core';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent {
  constructor(private dataService : DataService){}
  array : any[] = []

  async getApi(searchValue : string){
    console.log(searchValue)
    let searchLink = `https://openlibrary.org/search.json?q=${searchValue}&limit=10`
    let data = await fetch(searchLink)
    let formattedData = await data.json()
    let documentOfData = formattedData.docs
    this.array = []
    console.log(documentOfData)
    for(let i in documentOfData){
      console.log(typeof documentOfData[i].edition_key[0])
      this.array.push([documentOfData[i].cover_edition_key,documentOfData[i].title])
    }
  }

  test(data : any){
    console.log(data.target.value)
    this.getApi(data.target.value)
  }
  
  ngOnInit(){
    console.log(this.array)
  }

  addToLibrary(data : string){
    console.log(data)
    this.dataService.booksInLibrary.push(data)
    console.log(this.dataService.booksInLibrary)
  }
  
}
