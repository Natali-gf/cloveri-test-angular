import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { ChooseProfessionComponent } from './choose-profession/choose-profession.component';
import { CardsServise } from './cards.service';
import { AppRoutingModule } from './app-routing.module';
import { HelpButtonComponent } from './help-button/help-button.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    MainSectionComponent,
    ChooseProfessionComponent,
    HelpButtonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CardsServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
