import { NumeraisComponent } from './numerais.component';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the Numerais page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-numerais',
  templateUrl: 'numerais.html',
  providers: [
    NumeraisComponent
  ]
})
export class Numerais {

  public numeros: Array<any>  = [
    {   
        n: "Número 0",
        img:"/assets/numerais/n0.jpg"
    },

    {   
        n: "Número 1",
        img:"/assets/numerais/n1.jpg"
    },

    {   
        n: "Número 2",
        img:"/assets/numerais/n2.jpg"
    },

    {   
        n: "Número 3",
        img:"/assets/numerais/n3.jpg"
    },

    {   
        n: "Número 4",
        img:"/assets/numerais/n4.jpg"
    },

    {   
        n: "Número 5",
        img:"/assets/numerais/n5.jpg"
    },

    {   
        n: "Número 6",
        img:"/assets/numerais/n6.jpg"
    },

    {   
        n: "Número 7",
        img:"/assets/numerais/n7.jpg"
    },

    {   
        n: "Número 8",
        img:"/assets/numerais/n8.jpg"
    },

    {   
        n: "Número 9",
        img:"/assets/numerais/n9.jpg"
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Numerais');
  }

  escolher_sinal(index: number){
    let modal = this.modalCtrl.create(NumeraisComponent, { numero: this.numeros[index] });
    modal.present();
  }

}
