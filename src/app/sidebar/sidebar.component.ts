import { Component,OnInit,HostListener } from '@angular/core';
import { DataService } from 'src/data.service';
import { CurrentRoutingService } from '../current-routing.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  constructor(
    private dataService : DataService,
    private routingService : CurrentRoutingService
    ) {}

  viewportWidth = this.dataService.viewportWidth
  sidebarTransformLength = 992;
  removeSidebarText = this.viewportLessSidebarTL(this.viewportWidth,this.sidebarTransformLength)

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.viewportWidth = this.dataService.viewportWidth
    this.removeSidebarText = this.viewportLessSidebarTL(this.viewportWidth,this.sidebarTransformLength)
  }

  currentRouting : string = this.routingService.currentRoute
  current : string | undefined

  activeSidebarElement: { [key: string]: boolean } = {
    bookshelf: false,
    browse: false,
    search: false,
    dashboard: false,
    settings: false,
  };

  async ngOnInit() {
    await this.routingService.getCurrentRoute()
    this.currentRouting = this.routingService.currentRoute
    this.activeSidebarElement[this.currentRouting] = true
  }

  navLinkColor(data: string) {
    if (data == this.current) {
      return;
    }
    this.activeSidebarElement[data] = !this.activeSidebarElement[data];
    if(this.current){
      this.activeSidebarElement[this.current] = false;
    }
    this.current = data;
  }

  
  viewportLessSidebarTL(viewport : number, sidebar : number){
    if(viewport < sidebar){
      return true
    }else{
      return false
    }
  }

}


