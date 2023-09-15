import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentSubRoot: string | undefined;

  booksInLibrary : string[] = [
    "OL9621305M",
  "OL19013040M",
  "OL11584083M",
  "OL7031272M"]

  bookInfo = {
    toDisplay : false,
    id: "OL7122393M",
    title: 'the deaufhnohg khgljyf yf ouyf ouyf otudjfout duoytfiythfou yfu e',
    publish_date: '80534',
    publishers : 'The aim',
    by_statement : 'keagan',
  }

  constructor() { }
}
