import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from '../../store/products.interfaces';
import { Observable, take } from 'rxjs';
import { allProductsSelector } from '../../store/products.seletors';
import { saveProduct, updateProduct } from '../../store/products.actions';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent implements OnInit {
  nameControl = new FormControl();
  compoundControl = new FormControl();

  productsForm = new FormGroup({
    name: this.nameControl,
    compound: this.compoundControl,
  });
  id: string;
  allProducts$ = this.store.select(allProductsSelector);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.id !== '0') {
      this.allProducts$.pipe(take(1)).subscribe((allProducts) => {
        const product = allProducts?.find(product => product.id === this.id);
        this.productsForm.controls['name'].patchValue(product?.name);
        this.productsForm.controls['compound'].patchValue(product?.compound);
      });
    }
  }

  onSubmit(): void {
    this.allProducts$.pipe(take(1)).subscribe((allProducts) => {
      let id: string;
      if (allProducts?.length) {
        id = allProducts[allProducts?.length - 1].id + 1;
      } else {
        id = '1';
      }
      console.log(this.productsForm.value);
      const name = this.productsForm.value.name ?? '';
      const compound = this.productsForm.value.compound ?? '';
      const product: IProduct = { id: this.id !== '0'? this.id : id, name, compound };
      if (name && compound) {
        if (this.id === '0') {
          this.store.dispatch(saveProduct({ product }));
        }else{
          this.store.dispatch(updateProduct({ product }));
        }
        this.router.navigate(['all-products']);
      }
    });    
  }
}
