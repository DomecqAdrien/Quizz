import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { QuizQuestion } from '../service/question';
import { QuestionService } from '../service/question.service';




@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {
  question = null;
  selected = 0;
  score = 0;

  constructor(private router: Router,  private service: QuestionService, private storage: Storage) {
    this.question = service.get(0);
  }

  ngOnInit() {
  }

  onChange($event) {
    this.selected = $event.detail.value;
  }

  onValidate($event) {
    if (this.selected == this.question.bonChoix) {
      this.score++;
    }
    console.log(this.score);
    if (this.question.id < (this.service.count() - 1)) {
      this.question = this.service.get(this.question.id + 1);
    }
    else {
      this.storage.set('lastQuiz', this.score);
      this.router.navigate(['resultat'])
    }
  }





}
