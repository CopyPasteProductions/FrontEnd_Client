import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Game} from './game.model'

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
@Injectable()
export /**
 * BackEndService
 */
    class BackEndService {
    constructor(private http: Http) { }
    GAME_FIND_API_URL = "https://microsoft-apiapp966cc7695d704dbfa334a55635efab78.azurewebsites.net:443/api/GameOverviews";


    getGames(): Observable<Game[]> {
        return this.http.get(this.GAME_FIND_API_URL)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        console.log("Response:" + res.text())
        let body = res.json();
        console.log("body:" + body);
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}