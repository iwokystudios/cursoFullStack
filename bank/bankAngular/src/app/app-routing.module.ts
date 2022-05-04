import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { HomeComponent } from './pages/home/home.component';
import { LoanComponent } from './pages/loan/loan.component';
import { LoansComponent } from './pages/loans/loans.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { ManagersComponent } from './pages/managers/managers.component';
import { MessageComponent } from './pages/message/message.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { WireComponent } from './pages/wire/wire.component';
import { WiresComponent } from './pages/wires/wires.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent},
  { path: 'clients' , component: ClientsComponent},
  { path: 'managers' , component: ManagersComponent},
  { path: 'loans' , component: LoansComponent},
  { path: 'wires' , component: WiresComponent},
  { path: 'messages' , component: MessagesComponent},
  { path: 'clients/:id' , component: ClientComponent},
  { path: 'managers/:id' , component: ManagerComponent},
  { path: 'loans/:id' , component: LoanComponent},
  { path: 'wires/:id' , component: WireComponent},
  { path: 'messages/:id' , component: MessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
