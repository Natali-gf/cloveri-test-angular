import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ChooseProfessionComponent } from './choose-profession/choose-profession.component';

const routes: Routes = [
  // {path: '', redirectTo: '/choose-profession', pathMatch: 'full'},
  {path: 'professions', component: CardsComponent},
  // {path: 'choose-profession', component: ChooseProfessionComponent},
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }

