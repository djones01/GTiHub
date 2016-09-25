import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Configuration } from '../app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ApiUrl

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll(action: string): Observable<any> {
        return this._http.get(this.actionUrl + action)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    public GetSingle (action: string, id: number): Observable<any> {
        return this._http.get(this.actionUrl + action + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    public Add (action: string, itemToAdd: any): Observable<any> {
        var toAdd = JSON.stringify(itemToAdd);

        return this._http.post(this.actionUrl + action, toAdd, { headers: this.headers })
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    public Update (action: string, id: number, itemToUpdate: any): Observable<any> {
        return this._http
            .put(this.actionUrl + action + '/' + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    public Delete (action: string, id: number): Observable<any> {
        return this._http.delete(this.actionUrl + action + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
}