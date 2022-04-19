import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppTopMenuComponent } from './components/app-top-menu/app-top-menu.component';
import { MainViewRoutingModule } from './main-view-routing.module';



@NgModule({
  declarations: [
    MainViewComponent,
    AppHomeComponent,
    AppTopMenuComponent
  ],
  imports: [
    CommonModule,
    MainViewRoutingModule
  ],
  exports: [
    MainViewComponent
  ]
})
export class MainViewModule { }
