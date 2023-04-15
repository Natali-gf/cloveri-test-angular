import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardsServise } from '../cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{

  public professions!: Card[];

  constructor(private cardsServise: CardsServise) {
  }

  private getProfessions(): void {
    this.cardsServise.getProfessions().subscribe(professions => this.professions = professions)
  }
  ngOnInit() {
    this.getProfessions();
  }
}

