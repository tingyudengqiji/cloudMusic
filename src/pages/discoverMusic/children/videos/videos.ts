/**
 * Created by luwenwei on 18/3/10.
 */
import { Component } from '@angular/core';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'videos-page',
    segment:'videos-page'
})
@Component({
    selector:'videos',
    templateUrl: './videos.html'
})
export class VideosPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    constructor() {
    }
}