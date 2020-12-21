import { IUsers } from './../interface/userdatas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  data: Array<IUsers>;
   dat = [];

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  postData(userData){
    return this.http.post('https://reqres.in/api/users', userData);
  }
  getPost(){
    return this.http.get('https://reqres.in/api/users');
  }

}
