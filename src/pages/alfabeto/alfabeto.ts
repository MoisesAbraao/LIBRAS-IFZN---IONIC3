import { HomePage } from './../home/home';
import { AlfabetoComponent } from './alfabeto.component';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the Alfabeto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alfabeto',
  templateUrl: 'alfabeto.html',
  providers: [
      AlfabetoComponent
  ]
})
export class Alfabeto {

  public letras: Array<any> = [
    {   
        l: "A",
        img:"/assets/alfabeto/a.jpg",
        click: 'mostrar_a()'
    },

    {   
        l: "B",
        img:"/assets/alfabeto/b.jpg",
        click: 'mostrar_b()'
    },

    {   
        l: "C",
        img:"/assets/alfabeto/c.jpg",
        click: 'mostrar_c()'
    },

    {   
        l: "D",
        img:"/assets/alfabeto/d.jpg",
        click: 'mostrar_d()'
    },

    {   
        l: "E",
        img:"/assets/alfabeto/e.jpg",
        click: 'mostrar_e()'
    },

    {   
        l: "F",
        img:"/assets/alfabeto/f.jpg",
        click: 'mostrar_f()'
    },

    {   
        l: "G",
        img:"/assets/alfabeto/g.jpg",
        click: 'mostrar_g()'
    },

    {   
        l: "H",
        img:"/assets/alfabeto/h.jpg",
        click: 'mostrar_h()'
    },

    {   
        l: "I",
        img:"/assets/alfabeto/i.jpg",
        click: 'mostrar_i()'
    },

    {   
        l: "J",
        img:"/assets/alfabeto/j.jpg",
        click: 'mostrar_j()'
    },

    {   
        l: "K",
        img:"/assets/alfabeto/k.jpg",
        click: 'mostrar_k()'
    },

    {   
        l: "L",
        img:"/assets/alfabeto/l.jpg",
        click: 'mostrar_l()'
    },

    {   
        l: "M",
        img:"/assets/alfabeto/m.jpg",
        click: 'mostrar_m()'
    },

    {   
        l: "N",
        img:"/assets/alfabeto/n.jpg",
        click: 'mostrar_n()'
    },

    {   
        l: "O",
        img:"/assets/alfabeto/o.jpg",
        click: 'mostrar_o()'
    },

    {
        l:"P",
        img:"/assets/alfabeto/p.jpg",
        click: 'mostrar_p()'
    },

    {
        l:"Q",
        img:"/assets/alfabeto/q.jpg",
        click: 'mostrar_q()'
    },

    {
        l:"R",
        img:"/assets/alfabeto/r.jpg",
        click: 'mostrar_r()'
    },

    {
        l:"S",
        img:"/assets/alfabeto/s.jpg",
        click: 'mostrar_s()'
    },

    {
        l:"T",
        img:"/assets/alfabeto/t.jpg",
        click: 'mostrar_t()'
    },

    {
        l:"U",
        img:"/assets/alfabeto/u.jpg",
        click: 'mostrar_u()'
    },

    {
        l:"V",
        img:"/assets/alfabeto/v.jpg",
        click: 'mostrar_v()'
    },

    {
        l:"W",
        img:"/assets/alfabeto/w.jpg",
        click: 'mostrar_w()'
    },

    {
        l:"X",
        img:"/assets/alfabeto/x.jpg",
        click: 'mostrar_x()'
    },

    {
        l:"Y",
        img:"/assets/alfabeto/y.jpg",
        click: 'mostrar_y()'
    },

    {
        l:"Z",
        img:"/assets/alfabeto/z.jpg",
        click: 'mostrar_z()'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Alfabeto');
  }

  escolher_sinal(index: number){
    let modal = this.modalCtrl.create(AlfabetoComponent, { letra: this.letras[index] });
    modal.present();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.letras;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.letras = this.letras.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
