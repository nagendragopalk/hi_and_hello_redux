import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from '../../../../store/filter_store/filter_actions';
import * as filterStore from '../../../../store/filter_store/filter_reducer';
import * as fromSelector from '../../../../store/filter_store/filter_selecter';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/services/market_services/market_modal';
@Component({
  selector: 'app-itemslist-filter',
  templateUrl: './itemslist-filter.component.html',
  styleUrls: ['./itemslist-filter.component.scss']
})
export class ItemslistFilterComponent implements OnInit {

  panelOpenState = true;
  brands: Observable<Brand[]>;
  brandid: number;

  seasons: string[] = ['200 Above', '100 to 200', '50 to 100', 'Under 25'];
  // brands: string[] = ['Apsara','Cross','Reynolds','ZesTale'];
  colorlists: string[] = [ 'Coffee','Ivory','Red'];
  colors: string[] = ['Grey','Pink','Yellow'];
  constructor( private store: Store<filterStore.FilterState> ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.Load_Brands_Products());
    this.brands = this.store.select(fromSelector.brand$);
  }
  onChange($event: any) {
    this.brandid = $event.value
   console.log(this.brandid);
  }  
}
