import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'FfAQDXDbqyMTUV2u9g4PrktZZqzfwe'
  })
};

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get("http://tes1.teksboks.gemisystem.com/api/v1/forum/post/get", httpOptions);
  }
}
