import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token} from "@angular/compiler";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    attemptAuth(username: string, password: string): Observable<any> {
        const credentials = {username: username, password: password};
        return this.http.post<any>('http://localhost:8080/token/generate-token', credentials);
    }
}
