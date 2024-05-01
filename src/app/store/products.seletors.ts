import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductsState } from "./products.interfaces";

export const productsFeatureSelector = createFeatureSelector<IProductsState>('allProducts')

export const allProductsSelector = createSelector(
    productsFeatureSelector, 
    (productState: IProductsState) => productState.products
)

export const errorSelector = createSelector(
    productsFeatureSelector,
    (productState: IProductsState) => productState.error
)

export const selectedProductSelector = createSelector(
    productsFeatureSelector,
    (productState: IProductsState) => productState.selectedProduct
)
