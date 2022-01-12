import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonApiService } from "../common.service";
import { Brand, Category, Color, Price_mini_max, Product, ProductResponce } from "./market_modal";
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

    get_Mini_Max(): Observable<Price_mini_max[]> {
        return this.http.get<Price_mini_max[]>(this.apiservices.ALL_Price)
    }

    get_prod_details(Id: any): Observable<Product>{
        return this.http.get<Product>(`${this.apiservices.List_All_Products}/${Id}`)
    }
}