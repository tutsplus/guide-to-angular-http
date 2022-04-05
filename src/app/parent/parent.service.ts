import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import {HttpParams} from "@angular/common/http";

@Injectable({
providedIn:  'root'
})

export class ParentHttpService {

    private url = 'https://reqres.in/api/users';

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(this.url);
    }

    getUsersOnAPage(pageNo: string | number | boolean) {
        const params = new HttpParams()
        .set('page', pageNo)
        
        return this.http.get(this.url, {params})
    }

    getUsersOnAPageWithHeaders(pageNo: string | number | boolean) {
        const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
        const params = new HttpParams()
        .set('page', pageNo)
        
        return this.http.get(this.url, {headers, params})  
    }

    invalidAPICall(){
        let url = "https://reqres.in/abc";
        return this.http.get(url)  
    }
}