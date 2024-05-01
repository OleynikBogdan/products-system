import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { reducer } from '../store/products.reducer';
import { ProductsEffects } from '../store/products.effects';
import { ProductService } from '../store/products.service';
import { AllProductsComponent } from './all-products/all-products.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [{
  path: '',
  component: AllProductsComponent,
  children: [
    {
      path: 'product/:id',
      component: EditProductComponent
    }
  ]
}]
@NgModule({
  declarations: [
    AllProductsComponent,
    EditProductComponent
  ],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('allProducts', reducer),
    EffectsModule.forFeature([ProductsEffects]),
    HttpClientModule,
    ReactiveFormsModule

    ],
  providers: [ProductService],
  exports: [AllProductsComponent, RouterModule]
})
export class ProductsModule { }
