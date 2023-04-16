import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardsServise } from '../cards.service';

@Component({
  selector: 'app-choose-profession',
  templateUrl: './choose-profession.component.html',
  styleUrls: ['./choose-profession.component.scss',
  // '../cards/cards.component.scss'
]
})
export class ChooseProfessionComponent {

  public professionOne: Card [] = [];
  public professionTwo: Card [] = [];
  public cardsMore: Card [] = [];

  constructor(private cardsService: CardsServise) {};

  getRandomProfessions(): void {
    function getRandomIndex(min: number, max: number) {
      return Math.ceil(Math.random() * (max - min + 1));
    };

    let start1 = getRandomIndex(0,19);
    let end1 = start1 + 1;
    console.log(start1)
    console.log(end1)
    let start2 = getRandomIndex(0,19);
    let end2 = start2 + 1;
    console.log(start2)
    console.log(end2)
    while (start1 == start2) {
      start2 = getRandomIndex(0,19);
      end2 = start2 + 1;
    }
    console.log(start2)
    console.log(end2)
    this.cardsService.getProfessions()
      .subscribe(professionOne => this.professionOne = professionOne.slice(start1, end1));

    this.cardsService.getProfessions()
      .subscribe(professionTwo => this.professionTwo = professionTwo.slice(start2, end2));
  }

  getCardsMore(): void{
    this.cardsService.getCardsMore()
      .subscribe(cardsMore => this.cardsMore = cardsMore)
  }

    ngOnInit(): void {
    this.getRandomProfessions();
    this.getCardsMore()
  }
}
