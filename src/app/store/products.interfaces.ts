import { HttpErrorResponse } from "@angular/common/http"

export interface IProduct {
 id: string,
 name: string,
 compound: string
}

export interface IProductsState {
    products: IProduct[] | null,
    error: HttpErrorResponse | null,
    selectedProduct: IProduct | null
}
