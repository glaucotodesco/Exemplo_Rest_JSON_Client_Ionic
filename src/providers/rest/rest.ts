import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  
  apiUrl = 'http://localhost:8080/ProjetoWSRestJSON';
  
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getClients() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/rest/client/all').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
  
}
