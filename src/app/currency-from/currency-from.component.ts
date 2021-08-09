import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-currency-from',
  templateUrl: './currency-from.component.html',
  styleUrls: ['./currency-from.component.css'],
})
export class CurrencyFromComponent implements OnInit {
  selectedFromCurr:String =""; 
  currenciesFrom: any = [];
  constructor(private api: GetApiService) {}
  ngOnInit() {
    this.api.apiCall().subscribe((datas) => {
      this.currenciesFrom = Object.entries(datas).map((data, index) => [
        index,
        String ( data[1]+ ' - ' +data[0].toUpperCase()),
      ]);
    });
  }
}
