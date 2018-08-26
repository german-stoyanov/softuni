import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrokerModel } from '../models/BrokerModel';

const appKey = "kid_rk6IN3LUm"
const appSecret = "e1d95d34d9294f1085042343ebda7dc9"
const kinveyBaseUrl = "https://baas.kinvey.com/";

const getAllUrl = kinveyBaseUrl+'appdata'+"/"+appKey+'/brokers';


@Injectable()
export class BrokerService {
  constructor(private http : HttpClient) {  }

  getAll() {
    return this.http.get<Array<BrokerModel>>(getAllUrl);
  }

  create(body: BrokerModel) {
    return this.http.post<BrokerModel>(getAllUrl,body)
  }

  getById(id: string) {
    return this.http.get<BrokerModel>(getAllUrl+'/'+id);
  }

}