
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TeamDataService {

    constructor(private http: HttpClient) {

    }

    teamResolve(): Observable<any> {
        return this.http.get('/api/team');
    }
}
