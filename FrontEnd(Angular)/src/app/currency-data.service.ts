import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CurrenciesHistory } from 'src/currenciesHistory';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {
  dataChange: BehaviorSubject<CurrenciesHistory[]> = new BehaviorSubject<CurrenciesHistory[]>([]);
    private baseUrl:string="http://localhost:8081/api";
  private currenciesHistory = new CurrenciesHistory();
  refreshData: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpclient:HttpClient) { }
  
  public getCurrencies() :Observable<any>{
    return this.httpclient.get(`https://api.exchangeratesapi.io/latest`);
  }
  getHistories(): Observable<CurrenciesHistory[]> {
    return this.httpclient.get<CurrenciesHistory[]>(`${this.baseUrl + '/getHistories'}`);
  }
  createHistory(currenciesHistory: CurrenciesHistory) {
    return this.httpclient.post(`${this.baseUrl + '/postHistory'}`, currenciesHistory);
  }
  setter(currenciesHistory:CurrenciesHistory){
    this.currenciesHistory=currenciesHistory;
  }
 getter(){
   return this.currenciesHistory;
 }
}
