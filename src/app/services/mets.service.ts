import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Mets} from '../model/mets';
import {GenericService} from './generic-service';

@Injectable({
  providedIn: 'root'
})
export class MetsService extends GenericService<Mets, number>{
http:HttpClient;
  constructor(http:HttpClient) { 
    super(http, "http://localhost:3220/user");
  }
}
