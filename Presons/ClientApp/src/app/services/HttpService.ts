import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Person } from "./../models/Person";
import { Gender } from "./../models/Gender";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
  headers: HttpHeaders;
  //private baseUrl = window.location.origin + '/api/persons/';
  private baseUrl = 'api/persons/'

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getPersons() {
    return this.http.get<Person[]>(this.baseUrl + 'getpersons', { headers: this.headers });
  }

  getPerson(id: number) {
    return this.http.post(this.baseUrl +'getperson/' + id, null, { headers: this.headers });
  }

  public createPerson(person: Person) {
    return this.http.post(this.baseUrl +'create', person, { headers: this.headers });
  }

}





