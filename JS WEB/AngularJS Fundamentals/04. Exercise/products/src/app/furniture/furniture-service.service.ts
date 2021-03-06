import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from './models/furniture';


const getall = 'http://localhost:5000/furniture/all'
const create = "http://localhost:5000/furniture/create" 

@Injectable()
export class FurnitureServiceService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Furniture[]>(getall)
  }

  createModel(data){
    return this.http.post(create,data)
  }

  getDetails(id){
    return this.http.get<Furniture>(`http://localhost:5000/furniture/details/${id}`)
  }

  getMine(){
    return this.http.get<Furniture[]>(`http://localhost:5000/furniture/mine`)
  }

  delete(id){
    return this.http.delete(`http://localhost:5000/furniture/delete/${id}`)
  }

  getById(id){
    return this.http.get<Furniture>(`http://localhost:5000/furniture/${id}`)
  }

  edit(id, data){
    return this.http.put<Furniture>(`http://localhost:5000/furniture/edit/${id}`, data)
  }

  deleteItem(id){
    return this.http.delete(`http://localhost:5000/furniture/delete/${id}`)
  }
}
