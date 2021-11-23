import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CocktailService {
  baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private httpClient: HttpClient) { }

  getCocktailInfo(name: string): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}search.php?s=${name}`);
  }


}
