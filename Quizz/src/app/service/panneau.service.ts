import { Injectable } from '@angular/core';
import { Panneau } from './panneau';

@Injectable({
  providedIn: 'root'
})

export class PanneauService {

  panneaux: Panneau[] = [
              { id: 0,
                title: "CHAUSSEE RETRECIE PAR LA GAUCHE ",
                image: "http://www.coderoute.info/img/p1_1.gif",
                description: "Indique une chaussée qui se rétrécie par le côté gauche de la voie." },
              { id: 1,
                title: "CHAUSSEE RETRECIE PAR LA DROITE ",
                image: "http://www.coderoute.info/img/p1_2.gif",
                description: "Indique une chaussée qui se rétrécie par le côté droit de la voie" },
              { id: 2,
                title: "CHAUSSEE RETRECIE DES DEUX COTES ",
                image: "http://www.coderoute.info/img/p1_3.gif",
                description: "Indique une chaussée qui se rétrécie des deux côtés à la fois de la voie" },
              { id: 3,
                title: "CHAUSSEE GLISSANTE",
                image: "http://www.coderoute.info/img/p1_4.gif",
                description: "Indique une chaussée qui risque d'être glissante.La chaussée n'est pas systématiquement glissante, mais elle peut l'être suite à des conditions météorologiques particulières par exemple, ou par la présence d'un sol glissant permanent ou non.Il convient donc d'être prudent en ralentissant son allure à la vue de ce panneau de signalisation routière." },
              { id: 4,
                title: "SUCCESSION DE VIRAGES",
                image: "http://www.coderoute.info/img/p1_8.gif",
                description: "Indique l'approche d'une zone de virages successifs" },
              { id: 5,
                title: "DESCENTE DANGEREUSE",
                image: "http://www.coderoute.info/img/p1_20.gif",
                description: "Indique l'approche d'une descente dangereuse." },
              { id: 6,
                title: "VIRAGE A GAUCHE",
                image: "http://www.coderoute.info/img/p1_21.gif",
                description: "Indique l'approche d'une descente dangereuse." },
              { id: 7,
                title: "VIRAGE A DROITE ",
                image: "http://www.coderoute.info/img/p1_22.gif",
                description: "Indique l'approche d'une descente dangereuse." }

  ];

  constructor() { }

  getAll() {
    return this.panneaux;
  }

  get(id: number) {
    if (id < 0 || id >= this.panneaux.length) {
      return null;
    }
    return this.panneaux[id];
  }
}

