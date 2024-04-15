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

const routes: Routes = [{
    path: '',
    component: AllProductsComponent
}]
@NgModule({
  declarations: [
    AllProductsComponent
  ],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('allProducts', reducer),
    EffectsModule.forFeature([ProductsEffects]),
    HttpClientModule

    ],
  providers: [ProductService],
  exports: [AllProductsComponent]
})
export class ProductsModule { }
