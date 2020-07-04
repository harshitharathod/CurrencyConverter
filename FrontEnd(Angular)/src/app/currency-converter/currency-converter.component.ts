import { Component, OnInit } from '@angular/core';
import { CurrenciesHistory } from 'src/currenciesHistory';
import { CurrencyDataService } from '../currency-data.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers: [DatePipe]
})
export class CurrencyConverterComponent implements OnInit {


  EUR="EUR";
  USD: number;
  CHF: number;
  amount:number;
  result: number;
  selectedValue:string;
  public show:boolean = false;
  public data:CurrenciesHistory=new CurrenciesHistory() ;

  constructor(private currencyDataService:CurrencyDataService,private router:Router,private datePipe: DatePipe) {
   }
   date = new Date();
   currentDate:string;
  ngOnInit(): void {
    this.currencyDataService.getCurrencies().subscribe((data)=>{
       this.USD=data.rates.USD;
       this.CHF=data.rates.CHF;
      })
  }

  convert(){
    this.show= !this.show;
 
    this.data.conversion_from=this.amount+ " "+ this.EUR;
    this.data.conversion_to=this.result +" "+ this.selectedValue;
    this.currentDate=this.datePipe.transform(this.date);
    console.log(this.currentDate);
    this.data.date=this.currentDate;
  
    console.log(this.data);
    this.currencyDataService.createHistory(this.data).subscribe((val)=>{
      console.log(val);
      


    });
  }


  
  onDisplayingCurrency(){
    if(this.selectedValue=="USD"){
      this.result= this.amount*this.USD;
      console.log("USD:"+ this.result);
    }
    else{
      this.result=this.amount*this.CHF;
      console.log("CHF:"+ this.result);
    }
  }
   history(){
    this.router.navigate(['history']);
    
   }
}
