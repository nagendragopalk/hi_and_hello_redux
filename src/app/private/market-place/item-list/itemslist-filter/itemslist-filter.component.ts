import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import * as fromActions from '../../../../store/actions';
// import * as brandStore from '../../../../store/category/brand_reducer';
// import * as fromSelector from '../../../../store/selecter';
// import { Observable } from 'rxjs';
// import { Brand } from 'src/app/services/market_services/market_modal';
@Component({
  selector: 'app-itemslist-filter',
  templateUrl: './itemslist-filter.component.html',
  styleUrls: ['./itemslist-filter.component.scss']
})
export class ItemslistFilterComponent implements OnInit {

  panelOpenState = true;
  // brands: Observable<Brand[]>;

  seasons: string[] = ['200 Above', '100 to 200', '50 to 100', 'Under 25'];
  brands: string[] = ['Apsara','Cross','Reynolds','ZesTale'];
  colorlists: string[] = [ 'Coffee','Ivory','Red'];
  colors: string[] = ['Grey','Pink','Yellow'];
  constructor( ) { }

  ngOnInit(): void {
    // this.store.dispatch(fromActions.Load_Brand_Products());
    // this.brands = this.store.select(fromSelector.brands$);private store: Store<brandStore.BrandState>
  }

}
