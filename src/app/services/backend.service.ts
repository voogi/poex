import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITrade} from "../shared/ITrade";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  getTradeInfo(next_query_str: string): Observable<ITrade>{
    return this.http.get("http://www.pathofexile.com/api/public-stash-tabs?id=" + next_query_str) as Observable<ITrade>;
  }

    public getJSON(): Observable<ITrade> {
        return this.http.get("./assets/teszt.json") as Observable<ITrade>;
    }

}
