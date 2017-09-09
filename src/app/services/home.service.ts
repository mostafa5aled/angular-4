import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import "rxjs/add/operator/map";

@Injectable()
export class HomeService {

  constructor( private _http: Http) {

    }
    getLatestPosts(){
      return this._http.get("https://jsonplaceholder.typicode.com/photos").map(res => res.json());
    }
}
