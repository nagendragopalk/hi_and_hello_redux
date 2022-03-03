import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/services/modal.services';
import { AddNewClsComponent } from '../add-new-cls/add-new-cls.component';
import { AddStuClsComponent } from '../add-stu-cls/add-stu-cls.component';
import { GoogleClsComponent } from '../google-cls/google-cls.component';
import { InviteStuComponent } from '../invite-stu/invite-stu.component';
import { ReUpdateClsComponent } from '../re-update-cls/re-update-cls.component';
import { RewardClassComponent } from '../reward-class/reward-class.component';

const ELEMENT_DATA: PeriodicElement[] = [
  { 
    image: '../../../../../assets/josephpic.png', 
    name: 'Abigail Rusev',
    classname: 'Standard - 3 A',
    price: '30 FC',
    gift: '2',
    giftstatus: 'Arriving Monday',
    gifticon: 'card_giftcard',
    giftcolor: 'pricefont',
    statuscolor:'gitdel',
    gifticoncolor:'giticoncolor',
    invite: ''
  },
  { 
    image: '../../../../../assets/andrewpic.png', 
    name: 'Amelia Croy',
    classname: 'Standard - 3 A',
    price: '20 FC',
    gift: '3',
    giftstatus: 'Delivered',
    gifticon: 'card_giftcard',
    giftcolor: 'pricefont',
    statuscolor:'pricefont',
    gifticoncolor:'giticoncolor',
    invite: ''
  },
  { 
    image: '../../../../../assets/Avatar.png', 
    name: 'Andrew Grella',
    classname: 'Standard - 3 A',
    price: '5 FB',
    gift: '1',
    giftstatus: 'Delivered',
    gifticon: 'card_giftcard',
    giftcolor: 'pricefont',
    statuscolor:'pricefont',
    gifticoncolor:'giticoncolor',
    invite: ''
  },
  { 
    image: '../../../../../assets/Ellipse 24.png', 
    name: 'Anthony Formen',
    classname: 'Standard - 3 A',
    price: 'NA',
    gift: 'Not yet gifted',
    giftstatus: '-',
    gifticon: 'delete',
    giftcolor: 'nogiftcolor',
    statuscolor:'pricefont',
    gifticoncolor:'deleticoncolor',
    invite: 'Invite'
  },
  { 
    image: '../../../../../assets/Ellipse 24.png', 
    name: 'Anthony Formen',
    classname: 'Standard - 3 A',
    price: 'NA',
    gift: 'Not yet gifted',
    giftstatus: '-',
    gifticon: 'delete',
    giftcolor: 'nogiftcolor',
    statuscolor:'pricefont',
    gifticoncolor:'deleticoncolor',
    invite: 'Invite'
  },
  { 
    image: '../../../../../assets/Ellipse 24.png', 
    name: 'Anthony Formen',
    classname: 'Standard - 3 A',
    price: 'NA',
    gift: 'Not yet gifted',
    giftstatus: '-',
    gifticon: 'delete',
    giftcolor: 'nogiftcolor',
    statuscolor:'pricefont',
    gifticoncolor:'deleticoncolor',
    invite: 'Invite'
  },
  { 
    image: '../../../../../assets/Ellipse 24.png', 
    name: 'Anthony Formen',
    classname: 'Standard - 3 A',
    price: 'NA',
    gift: 'Not yet gifted',
    giftstatus: '-',
    gifticon: 'delete',
    giftcolor: 'nogiftcolor',
    statuscolor:'pricefont',
    gifticoncolor:'deleticoncolor',
    invite: 'Invite'
  },
  { 
    image: '../../../../../assets/Ellipse 24.png', 
    name: 'Anthony Formen',
    classname: 'Standard - 3 A',
    price: 'NA',
    gift: 'Not yet gifted',
    giftstatus: '-',
    gifticon: 'delete',
    giftcolor: 'nogiftcolor',
    statuscolor:'pricefont',
    gifticoncolor:'deleticoncolor',
    invite: 'Invite'
  },
  { 
    image: '../../../../../assets/Ellipse 24.png', 
    name: 'Anthony Formen',
    classname: 'Standard - 3 A',
    price: 'NA',
    gift: 'Not yet gifted',
    giftstatus: '-',
    gifticon: 'delete',
    giftcolor: 'nogiftcolor',
    statuscolor:'pricefont',
    gifticoncolor:'deleticoncolor',
    invite: 'Invite'
  },
];

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  dataSources = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  invteDialog() {
    const dialogRef = this.dialog.open(InviteStuComponent, {
      height: '600px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  reupdateDialog() {
    const dialogRef = this.dialog.open(ReUpdateClsComponent , {
      height: '550px',
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addstuDialog() {
    const dialogRef = this.dialog.open(AddStuClsComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addclsDialog() {
    const dialogRef = this.dialog.open(AddNewClsComponent, {
      height: '550px',
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  googleclsDialog() {
    const dialogRef = this.dialog.open(GoogleClsComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  rewardclsDialog() {
    const dialogRef = this.dialog.open(RewardClassComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
