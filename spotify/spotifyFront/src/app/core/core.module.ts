import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PlayingBarComponent } from './components/playing-bar/playing-bar.component';



@NgModule({
  declarations: [
    MenuComponent,
    PlayingBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    PlayingBarComponent,
  ]
})
export class CoreModule { }
