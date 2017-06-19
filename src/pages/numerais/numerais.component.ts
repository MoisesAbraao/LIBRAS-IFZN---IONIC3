import { Numerais } from './numerais';
import { Component } from '@angular/core';

import {NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';

@Component({
    template: `
        <ion-header>

        <ion-navbar color="primary">
            <ion-title>{{ numero.n }}</ion-title>
        </ion-navbar>

        </ion-header>
        
        <ion-content padding>
            <img [src]="numero.img"/>
        </ion-content>`
})

export class NumeraisComponent {
    constructor(public params: NavParams, public viewCtrl: ViewController, public navCtrl: NavController, public alertCtrl: AlertController){
        this.numero = this.params.get('numero');
    }

    numero: any;

    voltar(){
        this.navCtrl.pop();
    }
        
}