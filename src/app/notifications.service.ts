import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notificationsUrl = 'http://localhost:7070/notifications';

  constructor(private http: HttpClient) { }

  totalNotifications(): Observable<number> {
    return this.http.get<number>(this.notificationsUrl+'/total', httpOptions);
  }
}
