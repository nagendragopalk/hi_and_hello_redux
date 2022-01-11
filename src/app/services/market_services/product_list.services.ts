import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonApiService } from "../common.service";
import { Brand, Category, Color, ProductResponce } from "./market_modal";
@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor (private http : HttpClient, private apiservices: CommonApiService) {
    }

    getAllProducts(params : any): Observable<ProductResponce> {
        return this.http.get<ProductResponce>(this.apiservices.List_All_Products, {
            params: params
        })
    }
    getCategory(): Observable<Category[]> {
        return this.http.get<Category[]>(this.apiservices.ALL_CATEGORIES)
    }
         
    getBrand(): Observable<Brand[]> {
        return this.http.get<Brand[]>(this.apiservices.ALL_BRANDS)
    }

    getColors(): Observable<Color[]> {
        return this.http.get<Color[]>(this.apiservices.ALL_COLORS)
    }
}