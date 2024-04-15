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
} 
