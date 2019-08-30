import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../service/categorie.service';
import { Categorie } from '../service/categorie';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

      private item;

     constructor(private route: ActivatedRoute,
                 private categoriesService: CategorieService) {
       this.route.queryParams.subscribe(params => {
         if (params && params.id) {
           this.item = this.categoriesService.get(params.id);
         }
       });
     }


  ngOnInit() {
  }

}
