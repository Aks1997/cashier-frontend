import { Component, OnInit } from '@angular/core';
import { RestHandlerService } from '../rest-handler.service';

import {Transaction} from '../Transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: Array<Transaction>=[];

  constructor(private restHandlerService: RestHandlerService, private route: Router) { }

  ngOnInit() {
    this.restHandlerService.getTransactions()
      .subscribe(res=>{
        this.createTransactions(res);
      })
  }

  createTransactions(data){
    let total=0;
    let temp: Array<Transaction>=[];
    data.forEach(element=>{
      total= (element.type=="Credit") ? (Number(total)+Number(element.amount)) : 
      (Number(total)-Number(element.amount));
      let transaction= new Transaction(element.date, element.description, element.type, 
        element.amount, total);
      temp.push(transaction);
    });
    if(temp && temp.length>0){
      for(let index=temp.length-1; index>=0; index--){
        this.transactions.push(temp[index]);
      }
    }
    console.log(this.transactions)
  }

  openTransactionPage(){
    this.route.navigate([""])
  }
}
