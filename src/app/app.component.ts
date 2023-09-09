import { Component, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BiblioInsights';
  currentRoute: string | undefined 
  constructor(private router: Router,private dataService : DataService) {}
  
  ngOnInit(){
    this.getCurrentRoute();
  }

  ngOnChanges(changes: SimpleChanges) {
    let change = this.dataService.currentSubRoot
    if (changes['change']) {
      console.log("hello")
    }
  }

  getCurrentRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let routerRoute = this.router.url.split('/')
        this.currentRoute = routerRoute[1].toLowerCase();
        if(routerRoute.length > 2){
          this.dataService.currentSubRoot = routerRoute[2].toLowerCase();
        }
      }
    }
    );
  }
}
