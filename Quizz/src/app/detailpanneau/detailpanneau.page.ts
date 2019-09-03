import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanneauService } from '../service/panneau.service';
import { Panneau } from '../service/panneau';
@Component({
  selector: 'app-detailpanneau',
  templateUrl: './detailpanneau.page.html',
  styleUrls: ['./detailpanneau.page.scss'],
})
export class DetailpanneauPage implements OnInit {

      private item;

     constructor(private route: ActivatedRoute,
                 private panneauService: PanneauService) {
       this.route.queryParams.subscribe(params => {
         if (params && params.id) {
           this.item = this.panneauService.get(params.id);
         }
       });
     }

  ngOnInit() {
  }

}
