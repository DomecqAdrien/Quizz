import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PanneauService } from '../service/panneau.service';
import { Panneau } from '../service/panneau';

@Component({
  selector: 'app-panneaux',
  templateUrl: './panneaux.page.html',
  styleUrls: ['./panneaux.page.scss'],
})
export class PanneauxPage implements OnInit {


     panneaux: Panneau[] = null

   constructor(private PanneauService: PanneauService, private router: Router) {
      this.getPanneaux()
    }

    getPanneaux() {
      this.panneaux = this.PanneauService.getAll();
    }

    ngOnInit() {
    }

  onClickItem(PanneauId) {
     let navigationExtras: NavigationExtras = {
       queryParams: { id: PanneauId}
     }
     this.router.navigate(['detailpanneau'], navigationExtras)
   }

}
