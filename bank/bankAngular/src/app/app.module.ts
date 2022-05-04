import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { ButtonSendComponent } from './components/button-send/button-send.component';
import { FormComponent } from './components/form/form.component';
import { TableDisplayComponent } from './components/table-display/table-display.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardDisplayComponent } from './components/card-display/card-display.component';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoanComponent } from './pages/loan/loan.component';
import { MessageComponent } from './pages/message/message.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ModifyComponent } from './pages/modify/modify.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { LoansComponent } from './pages/loans/loans.component';
import { ManagersComponent } from './pages/managers/managers.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { WiresComponent } from './pages/wires/wires.component';
import { WireComponent } from './pages/wire/wire.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    ManagerComponent,
    ButtonSendComponent,
    FormComponent,
    TableDisplayComponent,
    TableRowComponent,
    MainMenuComponent,
    SidebarComponent,
    CardDisplayComponent,
    CardComponent,
    SearchBarComponent,
    LoanComponent,
    MessageComponent,
    FormClientComponent,
    ModifyComponent,
    ClientsComponent,
    LoansComponent,
    ManagersComponent,
    MessagesComponent,
    WiresComponent,
    WireComponent,
    SectionTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
