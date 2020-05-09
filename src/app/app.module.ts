import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule, MatInputModule,MatSnackBarModule } from '@angular/material';
import { RestangularModule } from 'ngx-restangular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CashierEntryComponent } from './cashier-entry/cashier-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RestangularConfigFactory } from './network/RestangularConfig';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CashierEntryComponent,
    TransactionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule ,
    MatSnackBarModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
