import { Injectable } from '@angular/core';
import { URL } from '../urlGlobal';
import { AssociateDetail } from './associateDetail';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssociateDetailService {
  constructor(private http: HttpClient) {}
  submitAssociateData(associateDetail: AssociateDetail) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(associateDetail);
    console.log('url is', environment.apiURL + URL.ADD_ASSOCIATE_DETAIL);
    return this.http.post(environment.apiURL + URL.ADD_ASSOCIATE_DETAIL, body, {
      headers: headers,
    });
  }
}
