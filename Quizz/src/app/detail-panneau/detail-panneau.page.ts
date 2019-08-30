import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-panneau',
  templateUrl: './detail-panneau.page.html',
  styleUrls: ['./detail-panneau.page.scss'],
})
export class DetailPanneauPage implements OnInit {


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

