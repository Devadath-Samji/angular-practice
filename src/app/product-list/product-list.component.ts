import { Component } from '@angular/core';

import { productsArray } from '../productsFile';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productsArray = productsArray;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
     //alert('Will get notified when product goes on sale!');
    console.log("'Will get notified when product goes on sale!");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/