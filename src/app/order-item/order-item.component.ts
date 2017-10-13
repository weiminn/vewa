import { Component, OnInit, Input } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  dbRef$;
  @Input() order;
  item = {
    key: '',
    order: '',
    tableNumber: '',
    quantity: '',
    status: ''
  };

  constructor(private afd: AngularFireDatabase) {
    this.dbRef$ = this.afd.list('test');
  }

  ngOnInit() {
    this.item.key = this.order.key;
    this.item.order = this.order.payload.val().Order;
    this.item.tableNumber = this.order.payload.val().TableNumber;
    this.item.quantity = this.order.payload.val().Quantity;
    this.item.status = this.order.payload.val().Status;

    console.log('Retrieved item: ' + JSON.stringify(this.item));
  }

  complete() {
    this.dbRef$.update(this.item.key, {
      Status: 'Completed'
    });
    console.log('Changed to complete!');
  }

  receive() {
    this.dbRef$.update(this.item.key, {
      Status: 'Received'
    });
    console.log('Changed to received!');
  }
}
