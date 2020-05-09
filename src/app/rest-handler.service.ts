import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class RestHandlerService {

  saveTransactionUrl:string="/transaction/save";
  getTransactionUrl: string="/transaction/fetch";
  
  constructor(private restangular: Restangular) { }

  saveTransaction(data){
    return this.restangular.all(this.saveTransactionUrl).post(data);
  }

  getTransactions(){
    return this.restangular.one(this.getTransactionUrl).get();
  }
}
