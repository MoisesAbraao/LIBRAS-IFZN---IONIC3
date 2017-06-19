import { Alfabeto } from './alfabeto';
import { Component } from '@angular/core';

import {NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';

@Component({
    template: `
        <ion-header>

        <ion-navbar color="primary">
            <ion-title>Letra {{ letra.l }}</ion-title>
        </ion-navbar>

        </ion-header>
        
        <ion-content padding>
            <img [src]="letra.img"/>
        </ion-content>`
})

export class AlfabetoComponent {
    constructor(public params: NavParams, public viewCtrl: ViewController, public navCtrl: NavController, public alertCtrl: AlertController){
        this.letra = this.params.get('letra');
    }

    letra: any;

    voltar(){
        this.navCtrl.pop();
    }
        
}