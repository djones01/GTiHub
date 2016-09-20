import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private projectUrl = 'api/Projects';  // URL to web api

    constructor(private http: Http) { }

    getProjects(): Observable<Object[]> {
        return this.http.get(this.projectUrl)
            .map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error');
          
    }
 
}