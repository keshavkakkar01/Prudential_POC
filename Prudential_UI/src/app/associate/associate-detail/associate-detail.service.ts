import { Injectable } from '@angular/core';
import { URL } from '../urlGlobal';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AssociateDetail } from './associateDetail';

@Injectable({
  providedIn: 'root',
})
export class AssociateDetailService {
  constructor(private http: HttpClient) {}
  submitAssociateData(associateDetail: AssociateDetail) {
    const headers = { 'content-type': 'application/json' };
    const body = '{' + '"associate" : ' + JSON.stringify(associateDetail) + '}';
    return this.http.post(environment.apiURL + URL.ADD_ASSOCIATE_DETAIL, body, {
      headers: headers,
    });
  }
}
