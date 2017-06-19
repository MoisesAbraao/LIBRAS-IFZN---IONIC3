import { Alfabeto } from './../alfabeto/alfabeto';
import { Numerais } from './../numerais/numerais';
import { Informatica } from './../informatica/informatica';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  alfabeto(){
    this.navCtrl.push(Alfabeto);
  }

  numerais(){
    this.navCtrl.push(Numerais);
  }

  informatica(){
    this.navCtrl.push(Informatica);
  }

}
