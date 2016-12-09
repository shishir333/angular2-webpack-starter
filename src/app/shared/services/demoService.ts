import {Http} from '@angular/http';
import {Injectable} from '@angular/core';


@Injectable()

export class DemoService
{
    constructor(private _http: Http)
    {
        _http.get('');
    }
}