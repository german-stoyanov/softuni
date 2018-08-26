import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const appKey = "kid_rk6IN3LUm"
const appSecret = "e1d95d34d9294f1085042343ebda7dc9"
const kinveyBaseUrl = "https://baas.kinvey.com/";

const getAllUrl = kinveyBaseUrl+'user'+"/"+appKey;


@Injectable()
export class UserService {
  constructor(private http : HttpClient) {  }

  getAll() {
    return this.http.get(getAllUrl);
  }

  remove(id){
    return this.http.delete(getAllUrl+'/'+id+'?hard=true')
  }
}