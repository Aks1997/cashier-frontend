import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashierEntryComponent } from './cashier-entry/cashier-entry.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

const routes: Routes = [
  {
    path: '', 
    component: CashierEntryComponent
  },
  {
      path: 'transaction',
      component: TransactionsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
