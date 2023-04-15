import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Card } from './card';
import { PROFESSIONS } from './list-cards';
import { PROFESSION_SECTION } from './list-cards';


@Injectable ({
	providedIn: 'root'
})
export class CardsServise {

	constructor() {}
	public getProfessions(): Observable<Card[]> {
		return of (PROFESSIONS);
	}

	public getCardsMore(): Observable<Card[]> {
		return of (PROFESSION_SECTION);
	}
}