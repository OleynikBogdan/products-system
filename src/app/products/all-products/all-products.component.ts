import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../store/products.actions';
import { of } from 'rxjs';
import { allProductsSelector } from '../../store/products.seletors';



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit{
  //allProducts$ = this.store.select(allProductsSelector)
  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(loadProducts())
  }
}
