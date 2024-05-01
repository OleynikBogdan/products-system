import { Injectable } from "@angular/core";
import { ProductService } from "./products.service";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { deleteProduct, deleteProductFailure, deleteProductSuccess, loadProducts, loadProductsFailure, loadProductsSuccess, saveProduct, saveProductsFailure, saveProductsSuccess, updateProduct, updateProductFailure, updateProductSuccess } from "./products.actions";
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
    ); 

    save$ = createEffect(
        () => this.action$.pipe(
            ofType(saveProduct),
            switchMap((action) => {
                return this.productService.createProduct(action.product).pipe(
                    switchMap(() => {
                        return this.productService.getAllProducts().pipe(
                            map((products: IProduct[])=>{
                                return saveProductsSuccess({products})
                            })
                        )
                    })
                )
            }),
            catchError((error: HttpErrorResponse)=>{
                return of(saveProductsFailure({error}))
            })
        )
    );
    
    delete$ = createEffect(
        () => this.action$.pipe(
            ofType(deleteProduct),
            switchMap((action) => {
                return this.productService.deleteProduct(action.id).pipe(
                    switchMap(() => {
                        return this.productService.getAllProducts().pipe(
                            map((products: IProduct[])=>{
                                return deleteProductSuccess({products})
                            })
                        )
                    })
                )
            }),
            catchError((error: HttpErrorResponse)=>{
                return of(deleteProductFailure({error}))
            })
        )
    );

    update$ = createEffect(
        () => this.action$.pipe(
            ofType(updateProduct),
            switchMap((action) => {
                return this.productService.updateProduct(action.product).pipe(
                    switchMap(() => {
                        return this.productService.getAllProducts().pipe(
                            map((products: IProduct[])=>{
                                return updateProductSuccess({products})
                            })
                        )
                    })
                )
            }),
            catchError((error: HttpErrorResponse)=>{
                return of(updateProductFailure({error}))
            })
        )
    );
}
