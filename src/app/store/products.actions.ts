import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./actionsTypes";
import { HttpErrorResponse } from "@angular/common/http";
import { IProduct } from "./products.interfaces";

export const loadProducts = createAction(
    ActionTypes.LOAD
)

export const loadProductsSuccess = createAction(
    ActionTypes.SUCCESS, 
    props<{ products: IProduct[] }>()
)

export const loadProductsFailure = createAction(
    ActionTypes.FAILURE,
    props<{ error: HttpErrorResponse }>()
)

export const saveProduct = createAction(
    ActionTypes.SAVE, 
    props<{ product: IProduct }>()
)

export const saveProductsSuccess = createAction(
    ActionTypes.SAVE_SUCCESS, 
    props<{ products: IProduct[] }>()
)

export const saveProductsFailure = createAction(
    ActionTypes.SAVE_FAILURE,
    props<{ error: HttpErrorResponse }>()
)

export const deleteProduct = createAction(
    ActionTypes.DELETE,
    props <{ id: string }>()
)

export const deleteProductSuccess = createAction(
    ActionTypes.DELETE_SUCCESS, 
    props<{ products: IProduct[] }>()
)

export const deleteProductFailure = createAction(
    ActionTypes.DELETE_FAILURE,
    props<{ error: HttpErrorResponse }>()
)

export const updateProduct = createAction(
    ActionTypes.EDIT,
    props <{ product: IProduct }>()
)

export const updateProductSuccess = createAction(
    ActionTypes.EDIT_SUCCESS, 
    props<{ products: IProduct[] }>()
)

export const updateProductFailure = createAction(
    ActionTypes.EDIT_FAILURE,
    props<{ error: HttpErrorResponse }>()
)
