import { Action, createAction, createReducer, on } from "@ngrx/store"
import { IProductsState } from "./products.interfaces"
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./products.actions"
import { HttpErrorResponse } from "@angular/common/http"

const initialState: IProductsState = {
    products: null,
    error: null,
    selectedProduct: null
}
const productsReducer = createReducer(
    initialState, 
    on(
        loadProducts,
        (state): IProductsState => ({...state})
    ),
    on(
        loadProductsSuccess,
        (state, action): IProductsState => ({
            ...state, 
            products: action.products
        })
    ),
    on(
        loadProductsFailure,
        (state, action): IProductsState => ({
            ...state,
            error:action.error
        })
    )
)

export function reducer(state:IProductsState, action: Action) {
    return productsReducer(state, action)
}
