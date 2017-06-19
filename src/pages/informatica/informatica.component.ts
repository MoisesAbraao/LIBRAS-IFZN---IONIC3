import { Informatica } from './informatica';
import { Component } from '@angular/core';

import {NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';

@Component({
    template: `
        <ion-header>

        <ion-navbar color="primary">
            <ion-title>{{ inforsinal.si }}</ion-title>
        </ion-navbar>

        </ion-header>
        
        <ion-content padding>
            <img [src]="inforsinal.img"/>
        </ion-content>`
})

export class InformaticaComponent {
    constructor(public params: NavParams, public viewCtrl: ViewController, public navCtrl: NavController, public alertCtrl: AlertController){
        this.inforsinal = this.params.get('inforsinal');
    }

    inforsinal: any;

    voltar(){
        this.navCtrl.pop();
    }
        
}