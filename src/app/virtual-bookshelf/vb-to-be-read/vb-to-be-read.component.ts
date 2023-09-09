import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vb-to-be-read',
  templateUrl: './vb-to-be-read.component.html',
  styleUrls: ['./vb-to-be-read.component.css']
})
export class VbToBeReadComponent {
  items: number[] = []; 
  bookList: string[] = [
    "OL14014470M",
    "OL25541616M",
    "OL13634897M",
    "OL8851350M",
    "OL9740066M",
    "OL37452736M",
    "OL7066792M",
    "OL28025973M",
    "OL33884475M",
    "OL8707724M",
    "OL7194614M",
    "OL11980239M",
    "OL9694834M",
    "OL8864633M",
    "OL8663940M",
    "OL23365952M",
    "OL8904310M",
    "OL9761880M",
    "OL33884475M",
    "OL8707724M",
    "OL7194614M",
    "OL11980239M",
    "OL9694834M",
    "OL8864633M",
    "OL8663940M",
    "OL23365952M",
    "OL8904310M",
    "OL9761880M",
    "OL7881235M",
    "OL14003960M",
    "OL25888201M",
    "OL5982605M",
    "OL24189918M",
    "OL23360773M",
    "OL24197185M",
    "OL14041043M",
    "OL37761651M",
    "OL23298552M",
    "OL7881235M",
    "OL14003960M",
    "OL25888201M",
    "OL5982605M",
    "OL24189918M",
    "OL23360773M",
    "OL24197185M",
    "OL14041043M",
    "OL37761651M",
    "OL23298552M",
    "OL23293169M",
    "OL17945484M",
    "OL27553966M",
    "OL6552114M",
    "OL6736713M",
    "OL24188598M",
    "OL7025510M",
    "OL23187105M",
    "OL23321225M",
    "OL27444251M"
]

constructor(private router: Router) { }
changeRoute(){
  this.router.navigate(['/browse']);
}

}
