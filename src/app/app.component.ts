import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})
export class AppComponent {

  orderList: Observable<any>;
  
  constructor(private afd: AngularFireDatabase) {
    this.orderList = this.afd.list('test').snapshotChanges();
    this.orderList.subscribe(console.log);
  }

}
