import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../model/register';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const REST_API_SERVER = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public http: HttpClient
  constructor(public httpClient: HttpClient, handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  register(user: any) {
    debugger
    localStorage.setItem("register", user);
    return user;
    // const httpHeaders = new HttpHeaders();
    // httpHeaders.set('Content-Type', 'application/json');
    // return this.httpClient.post<Register>(REST_API_SERVER + '/register', user, { headers: httpHeaders })
    //     .pipe(
    //         map((res: Register) => {
    //             return res;
    //         }),
    //         catchError((err: any) =>
    //             throwError(err)
    //         )
    //     );
  }
}
