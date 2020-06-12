import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserImplService extends HttpClient implements UserService {
  constructor(http: HttpHandler) {
    super(http);
  }
  getUserProfile(): Observable<any> {
    return this.get('http://172.104.32.57:8587/users/profile');
  }
  loginUser(body: any): Observable<any> {
    return this.post('http://172.104.32.57:8587/users/login', body).pipe(tap(
      value => {
        if (value.status === 200) {
          sessionStorage.setItem('token', value.data);
        }
      }
    ));
  }
}
