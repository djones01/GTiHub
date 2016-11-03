import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Configuration } from '../app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll(action: string): Observable<any> {
        return this._http.get(this.actionUrl + action)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    public GetAllWithId(action: string, id: number): Observable<any> {
        return this._http.get(this.actionUrl + action + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    public GetSingle (action: string, id: number): Observable<any> {
        return this._http.get(this.actionUrl + action + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    public Add (action: string, itemToAdd: any): Observable<any> {
        return this._http.post(this.actionUrl + action, JSON.stringify(itemToAdd), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public Update (action: string, id: number, itemToUpdate: any): Observable<any> {
        return this._http
            .put(this.actionUrl + action + '/' + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    public Delete (action: string, id: number): Observable<any> {
        return this._http.delete(this.actionUrl + action + '/' + id)
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}