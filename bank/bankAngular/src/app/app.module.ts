import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { ButtonSendComponent } from './components/button-send/button-send.component';
import { FormComponent } from './components/form/form.component';
import { TableDisplayComponent } from './components/table-display/table-display.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardDisplayComponent } from './components/card-display/card-display.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    ManagerComponent,
    TransferComponent,
    ButtonSendComponent,
    FormComponent,
    TableDisplayComponent,
    TableRowComponent,
    MainMenuComponent,
    SidebarComponent,
    CardDisplayComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
