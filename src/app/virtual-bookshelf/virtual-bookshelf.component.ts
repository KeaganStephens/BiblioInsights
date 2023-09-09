import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-virtual-bookshelf',
  templateUrl: './virtual-bookshelf.component.html',
  styleUrls: ['./virtual-bookshelf.component.css']
})
export class VirtualBookshelfComponent {
  current : string | undefined
  constructor(private dataService : DataService){}
  
  ngOnInit(){
    this.current = this.dataService.currentSubRoot
    if(this.current) this.currentRouteActive[this.current] = true
  }

  currentRouteActive : {[key :string ]: boolean} = {
    'read' : false,
    'currently-reading' : false,
    'to-be-read' : false
  }

  changeSubActive(data : any){
    if(this.current) this.currentRouteActive[this.current] = false
    this.currentRouteActive[data] = true
    this.current = data
  }

  
}


