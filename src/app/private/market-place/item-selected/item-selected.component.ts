import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/services/market_services/market_modal';
import * as fromActions from '../../../store/product_store/actions';
import * as fromStore from '../../../store/product_store/reducer';
import * as fromSelector from '../../../store/product_store/selecter';
@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemSelectedComponent implements OnInit {
  item: string[] = ['Grey', 'Red', 'Yellow'];
  // id: any
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  productsid$: Observable<Product>;
  

  // productsid$: string
  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.ProductState>
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    // this.products$ = this.store.select(fromSelector.products);
    // this.isLoading$ = this.store.select(fromSelector.isLoading);
    // this.store.dispatch(fromActions.Load_Product_detailes({ id: "1" }));
    // this.productsid$ = this.store.select(fromSelector.getdetails$);
    // this.store.select(fromSelector.getdetails$).subscribe(
    //   (id: any) => {
    //       this.productsid$=id;
    //   }
    //  );
    this.productsid$ = this.store.select(fromSelector.getdetails$);

    // this.productsid$ = this.store.select(fromSelector.getdetails$);
    // console.log(this.productsid$)
  }

  description(){
    document.getElementById("description")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  options(){
    document.getElementById("options")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  pricelist(){
    document.getElementById("pricelist")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  overview(){
    document.getElementById("overview")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  reviews(){
    document.getElementById("reviews")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
