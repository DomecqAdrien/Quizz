import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CategorieService } from '../service/categorie.service';
import { Categorie } from '../service/categorie';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

      categories: Categorie[] = null

   constructor(private CategorieService: CategorieService, private router: Router) {
      this.getCategories()
    }

    ngOnInit() {
    }

    getCategories() {
      this.categories = this.CategorieService.getAll();
    }

    onClickCategorie(categorieId) {
      let navigationExtras: NavigationExtras = {
        queryParams: { id: categorieId }
      }
      this.router.navigate(['detail'], navigationExtras)
    }

}
