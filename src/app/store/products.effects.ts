import { Injectable } from "@angular/core";
import { ProductService } from "./products.service";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./products.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { IProduct } from "./products.interfaces";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ProductsEffects {

    constructor (private productService: ProductService, private action$: Actions){}
    
    load$ = createEffect(
        () => this.action$.pipe(
            ofType(loadProducts),
            switchMap(() => {
                return this.productService.getAllProducts().pipe(
                    map((products: IProduct[])=>{
                        return loadProductsSuccess({products})
                    })
                )
            }),
            catchError((error: HttpErrorResponse)=>{
                return of(loadProductsFailure({error}))
            })
        )
    ) 
}
