import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { IProduct } from "./products.interfaces";

@Injectable()
export class ProductService {
    private url = '/api/products';

    constructor (private http: HttpClient){}

    getAllProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.url).pipe(
            catchError(error => throwError(error))
        )
    }

    createProduct(newProduct: IProduct): Observable<IProduct[]>{
        return this.http.post<IProduct[]>(this.url, newProduct).pipe(
            catchError(error => throwError(error))
        )
    }

    deleteProduct(id: string): Observable<IProduct> {
        return this.http.delete<IProduct>(this.url+'/'+id).pipe(
            catchError(error => throwError(error))
        )
    }

    updateProduct(product: IProduct): Observable<IProduct> {
        return this.http.put<IProduct>(this.url+'/'+product.id, product).pipe(
            catchError(error=>throwError(error))
        )
    }
} 
