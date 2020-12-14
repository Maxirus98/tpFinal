import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic-service';
import { Employeur } from '../model/employeur';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends GenericService<Employeur, number> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3221/user");
  }
}
