import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/services/market_services/market_modal';

export interface ImgSelect{
  id: number;
  imgUrl: string;
}

const ImgInfo: ImgSelect[] = [
  { id: 1, imgUrl: '../../../../../assets/product-details/Image.png'},
  { id: 2, imgUrl: '../../../../../assets/product-details/11.png'},
  { id: 3, imgUrl: '../../../../../assets/product-details/12.png'},
  { id: 4, imgUrl: '../../../../../assets/product-details/13.png'},
];
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent implements OnInit {

  imgDatas = ImgInfo;
  displayedImg = 0;
  @Input() ProductDatas : Product;

  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { 
    console.log(this.ProductDatas)
  }
  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
