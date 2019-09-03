import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.page.html',
  styleUrls: ['./resultat.page.scss'],
})
export class ResultatPage implements OnInit {

   res = 0;
   nbQuestion = 0;
  constructor(private router: Router, private storage: Storage, private service: QuestionService) {
   this.storage.get('lastQuiz').then(
   (value=>{this.res = value})).then(
   (value => { console.log(this.res)}));

   this.nbQuestion= this.service.count();
   }

  ngOnInit() {
  }

  back(){
       this.router.navigate(['tabs/categories'])
  }

}
