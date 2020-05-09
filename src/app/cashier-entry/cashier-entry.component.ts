import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackbarHandlerService } from '../snackbar-handler.service';
import { RestHandlerService } from '../rest-handler.service';
import { ChildActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-cashier-entry',
  templateUrl: './cashier-entry.component.html',
  styleUrls: ['./cashier-entry.component.css']
})
export class CashierEntryComponent implements OnInit {

  transactionForm: FormGroup;
  type: FormControl;
  amount: FormControl;
  description: FormControl;
  types: Array<string>=["Credit","Debit"];
  constructor(private snackbarHandlerService: SnackbarHandlerService, 
    private restHandlerService: RestHandlerService, private route: Router) { }

  ngOnInit() {
    this.type= new FormControl(this.types[0], Validators.required);
    this.amount= new FormControl(null, Validators.required);
    this.description= new FormControl(null, Validators.required);

  this.transactionForm= new FormGroup({
    type: this.type,
    amount: this.amount,
    description: this.description
  })
  }

  submit(data){
    if(data.valid){
      this.restHandlerService.saveTransaction(data.value)
        .subscribe(res=>{
          if(res.response==true){
            this.route.navigate(['/transaction']);
          }else{
            this.snackbarHandlerService.openSnackBar("Error while saving");
          }  
        },err=>{
          this.snackbarHandlerService.openSnackBar(err.message);
        })
    }else{
      this.snackbarHandlerService.openSnackBar("Fill All details");
    }
  }

  cancel(){
    this.route.navigate(['/transaction'])
  }
}
