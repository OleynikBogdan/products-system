import { Action, createAction, createReducer, on } from "@ngrx/store"
import { IProductsState } from "./products.interfaces"
import { deleteProductFailure, deleteProductSuccess, loadProducts, loadProductsFailure, loadProductsSuccess, saveProductsFailure, saveProductsSuccess, updateProductFailure, updateProductSuccess } from "./products.actions"


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
    ),
    on(
        saveProductsSuccess, 
        deleteProductSuccess,
        updateProductSuccess,
        (state, action): IProductsState => ({
            ...state, 
            products: action.products
        })
    ),
    on( 
        saveProductsFailure,
        deleteProductFailure,
        updateProductFailure,
        (state, action): IProductsState => ({
            ...state,
            error: action.error
        })
    )
)

export function reducer(state:IProductsState, action: Action) {
    return productsReducer(state, action)
}
