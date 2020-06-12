import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class UserService {
  abstract getUserProfile(): Observable<any>;
  abstract loginUser(body: any): Observable<any>;
}
