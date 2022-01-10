import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/services/market_services/market_modal';
import * as fromActions from '../../../../store/actions';
import * as fromStore from '../../../../store/reducer';
import * as fromSelector from '../../../../store/selecter';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-itemslist-products',
  templateUrl: './itemslist-products.component.html',
  styleUrls: ['./itemslist-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ItemslistProductsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  products$: Observable<Product[]>;
  totalRows$: number;
  pageSize$:  number;
  currentPage$: number;
  pageSizeOptions: number[] = [1, 2, 5, 10, 50, 100];
  @ViewChild(MatPaginator)paginator!: MatPaginator;

  constructor(private store: Store<fromStore.ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.Load_All_Products({pageSize: 5, CurentPage: 0}));
    this.products$ = this.store.select(fromSelector.products);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.store.select(fromSelector.totalCount).subscribe(
      (totpage: number) => {
          this.totalRows$=totpage;
      }
     );
     this.store.select(fromSelector.pageCountSize).subscribe(
      (pagesiz: number) => {
          this.pageSize$=pagesiz;
      }
     );
  this.store.select(fromSelector.currentPageCount).subscribe(
    (curpage: number) => {
        this.currentPage$=curpage;
    }
   );
  }
  pageChanged(event: PageEvent) : void {
    console.log({ event });    
    this.store.dispatch(fromActions.Load_All_Products({pageSize: event.pageSize, CurentPage: event.pageIndex}));
    
  }
}
