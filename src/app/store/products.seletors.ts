import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppProducts, IProductsState } from "./products.interfaces";

export const productsFeatureSelector = createFeatureSelector<IAppProducts, IProductsState>('allProducts')

export const allProductsSelector = createSelector(
    productsFeatureSelector, 
    (productState: IProductsState) => productState.products
)
