import { Injectable } from '@angular/core';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})

export class CategorieService {

  categories: Categorie[] = [
        { id: 0,
          title: "Danger",
          image: "https://www.anirom.com/panneaux/danger.png",
          description: "Panneaux qui indique un danger" },
        { id: 1,
          title: "Interdiction",
          image: "https://www.anirom.com/panneaux/interdiction.png",
          description: "Commentaire 2" },
        { id: 2,
          title: "Obligation",
          image: "https://www.anirom.com/panneaux/obligation.png",
          description: "Commentaire 3" },
        { id: 3,
          title: "Indication",
          image: "https://www.anirom.com/panneaux/indication.png",
          description: "Commentaire 4" },
        { id: 4,
          title: "Localisation",
          image: "https://t3.ftcdn.net/jpg/00/24/10/60/500_F_24106064_XdpMr5A0WszSzWtQGghEy5Vu9wYkrmEE.jpg",
          description: "Commentaire 5" },
        { id: 5,
          title: "direction",
          image: "https://www.anirom.com/panneaux/directionvert.png",
          description: "Commentaire 6" }
  ];

  constructor() { }

  getAll() {
    return this.categories;
  }

  get(id: number) {
    if (id < 0 || id >= this.categories.length) {
      return null;
    }
    return this.categories[id];
  }
}

