import { Component, HostListener, SimpleChanges } from '@angular/core';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private dataService : DataService,
  ){}

  desktopDisplay !: boolean

  widthOfDisplayTransition = 764
  
  ngOnInit(){
    this.dataService.viewportWidth = window.innerWidth
    this.viewportLargerThan(this.dataService.viewportWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.dataService.viewportWidth = window.innerWidth
    this.viewportLargerThan(this.dataService.viewportWidth)
  }

  viewportLargerThan(viewPortWidth : number){
    if(viewPortWidth > this.widthOfDisplayTransition){
      this.desktopDisplay = true
    }else{
      this.desktopDisplay = false
    }
  }
  
}
