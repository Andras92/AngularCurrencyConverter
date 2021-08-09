import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-currency-to',
  templateUrl: './currency-to.component.html',
  styleUrls: ['./currency-to.component.css']
})
export class CurrencyToComponent implements OnInit {
  selectedToCurr:String =""; 
  currenciesTo: any = [];
  constructor(private api: GetApiService) {}
  ngOnInit() {
    this.api.apiCall().subscribe((datas) => {
      this.currenciesTo = Object.entries(datas).map((data, index) => [
        index,
        String ( data[1]+ ' - ' +data[0].toUpperCase()),
      ]);
    });
  }
}
