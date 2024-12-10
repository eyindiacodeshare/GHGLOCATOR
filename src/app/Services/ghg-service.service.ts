import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class GhgServiceService {

  private apiUrl = environment.baseUrl;  // (https://localhost:7284/api/ ) Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // postRequest(data: any, ACTION: string, KEY: string): Observable<any> {
  //   debugger;
  //   console.log(ACTION);
  //   return this.http.post<any[]>(this.apiUrl + ACTION, data);
  // }

  postRequest(data : any): Observable<any> {
    return this.http.post<any[]>(`${this.apiUrl}GHG_Master/MasterPartyList`,data);
  }

  // postRequest(data: any, ACTION: string, KEY: string) {
  //   debugger;
  //   var headerss = new HttpHeaders();
  //   ACTION = this.apiUrl + ACTION;
  //   console.log("gfggfgfg",ACTION);
  //   return this.http.post(ACTION, data);
  // }
}
