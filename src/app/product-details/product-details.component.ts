import { Component, OnInit } from '@angular/core';
import {productsArray} from '../productsFile';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //variable to store product which was selected
  product;
  constructor() { }

  ngOnInit() {
  }

}