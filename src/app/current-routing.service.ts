import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CurrentRoutingService {

  constructor(
    private router: Router,
  ){}

  currentRoute !: string 

  ngOnInit(){
    this.getCurrentRoute();
    this.router.navigate(['/browse'])
    console.log(this.currentRoute)
  }

async getCurrentRoute() {
  await this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let routerRoute = this.router.url.split('/')
        this.currentRoute = routerRoute[1].toLowerCase();
        if(routerRoute.length > 2){
          console.log("Update your code to handle sub routing")
        }
      }
    }
  );
}

}
