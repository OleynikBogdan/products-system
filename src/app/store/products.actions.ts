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
