import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const getDataAPI = 'https://reqres.in/api/users?page=2';

@Injectable()
export class DataManagerService {

  fetchedData: any;
  constructor(private http: HttpClient) { }

  async getData() {
    // this.http.get(getDataAPI).subscribe(res => {
    //   const fetchedData: any = res;
    //   this.fetchedData = fetchedData.data;
    //   return null;
    // });
    const result: any = await this.http.get(getDataAPI).toPromise();
    console.log(result.data);
    return result.data;
  }
}
