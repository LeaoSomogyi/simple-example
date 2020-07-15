import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '@user/user.model';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    get(id: number) : Observable<User> {
        return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    getAll() : Observable<User[]> {
        return this.httpClient.get<User[]>(`${environment.apiUrl}/users`);
    }

    save(user: User) : Observable<any> {
        return this.httpClient.post(`${environment.apiUrl}/users`, user);
    }

    update(user: User) : Observable<any> {
        return this.httpClient.put(`${environment.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) : Observable<any> {
        return this.httpClient.delete(`${environment.apiUrl}/users/${id}`);
    }
}