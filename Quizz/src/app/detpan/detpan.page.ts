import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detpan',
  templateUrl: './detpan.page.html',
  styleUrls: ['./detpan.page.scss'],
})
export class DetpanPage implements OnInit {

constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.item) {
        this.item = JSON.parse(params.item)
      }
    })
   }


  ngOnInit() {
  }
}
