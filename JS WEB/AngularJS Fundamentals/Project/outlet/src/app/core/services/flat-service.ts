import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlatModel } from '../models/FlatModel';

const appKey = "kid_rk6IN3LUm"
const appSecret = "e1d95d34d9294f1085042343ebda7dc9"
const kinveyBaseUrl = "https://baas.kinvey.com/";

const getAllUrl = kinveyBaseUrl+'appdata'+"/"+appKey+'/flats';


@Injectable()
export class FlatService {
  constructor(private http : HttpClient) {  }

  getAll() {
    return this.http.get<Array<FlatModel>>(getAllUrl);
  }

  create(body) {
    return this.http.post<FlatModel>(getAllUrl,body)
  }

  delete(id) {
    return this.http.delete(getAllUrl+'/'+id)
  }

  getById(id){
    return this.http.get<FlatModel>(getAllUrl+'/'+id)
  }

  edit(id,body){
    return this.http.put<FlatModel>(getAllUrl+'/'+id, body)
  }

}