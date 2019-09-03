import { Injectable } from '@angular/core';

import { QuizQuestion } from './question';

@Injectable({

  providedIn: 'root'

})

export class QuestionService {

  questions: QuizQuestion[] = [

    { id: 0, panneauId: 5, question: "Ce panneau indique:",

    image: "https://www.virages.com/Images/Categorie_A8/25732-500.jpg",

    choix1: "une interdiction de tourner à gauche",

    choix2: "une interdiction de tourner à droite",

    choix3: "une interdiction de stationner",

    choix4: "une interdiction de faire demi-tour",

    bonChoix: 2

    },

    { id: 1, panneauId: 2, question: "Ce panneau indique:",

    image: "https://www.auto-ecole.net/img/banque_image/panneau_701530090932.jpg",

    choix1: "une interdiction de stationner",

    choix2: "autorisation pour les cycliste",

    choix3: "une fin de limitation de vitesse",

    choix4: "une succession de virages dangereux",

    bonChoix: 3

    },

    { id: 2, panneauId: 3, question: "Ce panneau indique:",

    image: "https://www.toutelasignaletique.com/15477-thickbox_default/kit-ou-panneau-seul-type-routier-obligation-de-tourner-a-droite-ref-b21-1.jpg",

    choix1: "une obligation de tourner à droite",

    choix2: "une interdiction de tourner à droite",

    choix3: "une intersection",

    choix4: "une interdiction de faire demi-tour",

    bonChoix: 1

    }

  ]

  constructor() { }

  get(id:number) {

    return this.questions[id];

  }

  count() {
    return this.questions.length;
  }

}


