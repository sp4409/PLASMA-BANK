import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {
private baseUrl = "http://localhost:8080/api/v1";
  constructor(private httpClient:HttpClient) { 
  }

  login(data: any){
    let params = new HttpParams()
    .set('email', data.email)
    .set('password', data.password);
    console.log(params);
    return this.httpClient.post(this.baseUrl+"/user/login",params);
  }

  register(data: any){
    console.log(data);
    return this.httpClient.post(this.baseUrl+"/user/register",data);
  }

  getBiller(param:any){
    return this.httpClient.post(this.baseUrl+"/biller/getBiller",param);
  }

  getAccount(email:any){
    return this.httpClient.post(this.baseUrl+"/account/getAccount",email);
  }
}
