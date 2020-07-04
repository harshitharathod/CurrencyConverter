import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrenciesHistory } from 'src/currenciesHistory';
import { MatTable } from '@angular/material/table';
import { CurrencyDataService } from '../currency-data.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

 
  currencyDataSource:CurrenciesHistory[];
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  displayedColumns = ['Conversion_from', 'Conversion_to', 'Date'];
  constructor(private currencyDataService:CurrencyDataService) { }

  ngOnInit(): void {
    this.currencyDataService.getHistories().subscribe(val=>{
      console.log(val);
      this.currencyDataSource=val;
  });


}
}


export class CurrencyDataSource extends DataSource<any> {

  constructor(private currencyDataService: CurrencyDataService) {
    super();
  }

  connect(): Observable<CurrenciesHistory[]> {
    return this.currencyDataService.getHistories();
  }

  disconnect() {
  }
}
