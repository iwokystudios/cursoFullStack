import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PlayingBarComponent } from './components/playing-bar/playing-bar.component';
import { RouterModule } from '@angular/router';
import { MainViewRoutingModule } from '../main-view/main-view-routing.module';
import { PlayButtonComponent } from './components/play-button/play-button.component';



@NgModule({
  declarations: [
    MenuComponent,
    PlayingBarComponent,
    PlayButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainViewRoutingModule,
  ],
  exports: [
    MenuComponent,
    PlayingBarComponent,
    PlayButtonComponent
  ]
})
export class CoreModule { }
