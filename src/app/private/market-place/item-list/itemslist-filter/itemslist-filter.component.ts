import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemslist-filter',
  templateUrl: './itemslist-filter.component.html',
  styleUrls: ['./itemslist-filter.component.scss']
})
export class ItemslistFilterComponent implements OnInit {

  panelOpenState = true;
  seasons: string[] = ['200 Above', '100 to 200', '50 to 100', 'Under 25'];
  brands: string[] = ['Apsara','Cross','Reynolds','ZesTale'];
  brandlists: string[] = ['Classmate','Parker','Waterman','4Ever'];
  colorlists: string[] = [ 'Coffee','Ivory','Red'];
  colors: string[] = ['Grey','Pink','Yellow'];
  constructor() { }

  ngOnInit(): void {
  }

}
