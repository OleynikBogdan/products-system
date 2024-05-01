import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteProduct, loadProducts } from '../../store/products.actions';
import { allProductsSelector } from '../../store/products.seletors';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, map, take, tap } from 'rxjs';



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit{
  allProducts$ = this.store.select(allProductsSelector);
  showSearch = false;
  searchControl = new FormControl();
  
  searchForm = new FormGroup({
    searchValue: this.searchControl
  });

  constructor(private store: Store, private router: Router){}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.searchForm.controls['searchValue'].valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value => {
      const all$ = this.store.select(allProductsSelector);
      this.allProducts$ = all$.pipe(
        take(1),
        map(allProducts => {
          const filteredProducts = allProducts?.filter(product => product.name.includes(value) || product.compound.includes(value));
          return filteredProducts?.length ? filteredProducts : null
        })
      );
    })
  }

  createProduct(): void{
    this.router.navigate(['all-products','product', 0]);
  }

  deleteProduct(id: string): void{
    this.store.dispatch(deleteProduct({id}));
  }

  updateProduct(id: string): void{
    this.router.navigate(['all-products', 'product', id]);
  }
}
