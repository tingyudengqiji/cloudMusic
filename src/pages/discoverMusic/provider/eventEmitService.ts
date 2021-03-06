import {Injectable,EventEmitter} from '@angular/core';

@Injectable()
export class RootViewCoverService {
    rootViewCover: EventEmitter<any>;
    globalRootViewCover: EventEmitter<any>;
    setRoot: EventEmitter<any>;
    constructor(){
        this.rootViewCover = new EventEmitter();
        this.globalRootViewCover = new EventEmitter();
        this.setRoot = new EventEmitter();
    }
}