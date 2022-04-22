import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PlayingBarComponent } from './components/playing-bar/playing-bar.component';
import { CardComponent } from './components/card/card/card.component';



@NgModule({
  declarations: [
    MenuComponent,
    PlayingBarComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    PlayingBarComponent,
    CardComponent
  ]
})
export class CoreModule { }
