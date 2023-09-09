import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() currentRouting: string | undefined;
  current : string | undefined

  someCondition: { [key: string]: boolean } = {
    bookshelf: false,
    browse: false,
    search: false,
    dashboard: false,
    settings: false,
  };

  constructor() {}

  ngOnInit() {
    // This is where you should access the input property
    console.log(this.currentRouting);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentRouting']) {
      // Handle changes to the currentRouting property here
      if(this.current){
        this.someCondition[this.current] = false;
      }
      console.log('Current Routing Changed:', this.currentRouting);
      if(this.currentRouting){
        this.someCondition[this.currentRouting] = true;
        this.current = this.currentRouting
      }
    }
  }

  // current = 'bookshelf';

  navLinkColor(data: string) {
    if (data == this.current) {
      return;
    }
    this.someCondition[data] = !this.someCondition[data];
    if(this.current){
      this.someCondition[this.current] = false;
    }
    this.current = data;
  }
}
