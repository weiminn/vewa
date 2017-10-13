import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx'

@Injectable()
export class DataService {

  constructor(private http: Http) {
   }

  // retrieveData() {
  //   return this.http.get('https://you-tiao.firebaseio.com/table2.json')
  //   .map(res => res.json());
  // }

}
