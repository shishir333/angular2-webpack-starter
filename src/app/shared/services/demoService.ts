import {Injectable} from '@angular/core';

@Injectable()

export class DemoService
{
    constructor()
    {
        
    }

    getVariable () : Number
    {
        console.log("Object created");
        return 10;
    }
}