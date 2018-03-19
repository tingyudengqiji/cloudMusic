/**
 * Created by luwenwei on 18/3/15.
 */
import { Component,OnInit,ViewChild,AfterViewInit,ElementRef } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { NavController,NavParams } from 'ionic-angular';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'play-music-page'
})
@Component({
    templateUrl: 'playMusic.html',
    styleUrls:['/style.scss'],
    providers:[HttpService]
})
export class PlayMusicPage implements OnInit,AfterViewInit{
    @ViewChild('playMusicNav') playMusicNav
    musicData:any
    musicUrlData:any
    playingMusic:boolean = false
    musicUrl:string
    constructor(
        private http:HttpService,
        private navCtrl:NavController,
        private navParams:NavParams
    ) {

    }

    ngOnInit() {
        this.playMusicNav.setBackButtonText("");
        this.musicData = this.navParams.get('data');
        this.getMusicUrl();
    }

    ngAfterViewInit() {
    }

    changePlayStatus(value) {
        console.log(value)
        this.playingMusic = value
    }

    setMusicAudio() {
        this.musicUrl = 'http://music.163.com/song/media/outer/url?id=' + this.musicUrlData.id + '.mp3';
        /*this.mediaEle = document.getElementById('wy_music')
        media.src = 'http://music.163.com/song/media/outer/url?id=' + this.musicUrlData.id + '.mp3';
        media.load();
        media.play();
        this.playingMusic = true;

        media.addEventListener('pause',()=>{
            this.playingMusic = false;
        });
        media.addEventListener('play',()=>{
            this.playingMusic = true;
        });
        media.addEventListener('canplay',()=>{
            console.log(media.duration)
        });*/
    }

    getMusicUrl() {
        let promise = this.http.getData({url:"music/url",params:{id:this.musicData.id}});
        promise.then(function (res):any{
            this.musicUrlData = res.data[0];
            this.setMusicAudio();
        }.bind(this)).catch((e)=>{console.error(e)});
    }
}