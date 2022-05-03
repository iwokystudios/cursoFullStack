import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { LoanComponent } from './pages/loan/loan.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { MessageComponent } from './pages/message/message.component';
import { ModifyComponent } from './pages/modify/modify.component';
import { TransferComponent } from './pages/transfer/transfer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent},
  { path: 'clients' , component: ClientComponent},
  { path: 'managers' , component: ManagerComponent},
  { path: 'loans' , component: LoanComponent},
  { path: 'wires' , component: TransferComponent},
  { path: 'messages' , component: MessageComponent},
  { path: 'modify' , component: ModifyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
