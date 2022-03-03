import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemslist-filter',
  templateUrl: './itemslist-filter.component.html',
  styleUrls: ['./itemslist-filter.component.scss']
})
export class ItemslistFilterComponent implements OnInit {

  panelOpenState = true;
  seasons: string[] = ['200 Above', '100 to 200', '50 to 100', 'Under 25'];
  brands: string[] = ['Apsara','Classmate','Cross','Parker','Reynolds','Waterman','ZesTale','4Ever'];
  colors: string[] = [ 'Coffee','Grey','Ivory','Pink','Red','Yellow'];
  constructor() { }

  ngOnInit(): void {
  }
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57))  {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
