import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="https://api.publicapis.org/entries";

  constructor(private httpClient:HttpClient) { }

  public getUsers(){
    return this.httpClient.get(this.baseUrl);
  }

}
