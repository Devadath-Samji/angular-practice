import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {productsArray} from '../productsFile';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  {
  //variable to store product which was selected
  product;
  constructor(private route:ActivatedRoute) { 
    console.log("ProductDetailsComponent");
  }
  //void ngOnInit(){}
  ngOnInit(): void{
    this.route.paramMap.subscribe(function(params){
      this.product = productsArray[+params.get('productId')];
    });
   /* Alternate short way is shown below
   
    this.route.paramMap.subscribe(params => {
      productsArray[+params.get('ProductId')]
    })
     */
    console.log("ProductDetailsComponent post construtction ngOnInit");
  }



}