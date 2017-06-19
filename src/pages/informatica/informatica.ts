import { InformaticaComponent } from './informatica.component';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the Informatica page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-informatica',
  templateUrl: 'informatica.html',
  providers: [
      InformaticaComponent
  ]
})
export class Informatica {

  public sinaisinfor = [

    
    {   
        si: "Arquivo",
        img:"/assets/informatica/arquivo.jpg"
    },

    {   
        si: "Excel",
        img:"/assets/informatica/excel.jpg",
    },

    {   
        si: "Facebook",
        img:"/assets/informatica/facebook.jpg"
    },

    {   
        si: "Fonte",
        img:"/assets/informatica/fonte.jpg"
    },

    {   
        si: "Gabinete",
        img:"/assets/informatica/gabinete.jpg"
    },

    {   
        si: "Imprimir",
        img:"/assets/informatica/imprimir.jpg"
    },

    {   
        si: "Memória RAM",
        img:"/assets/informatica/memoriaram.jpg"
    },

    {   
        si: "Monitor",
        img:"/assets/informatica/monitor.jpg"
    },

    {   
        si: "Mouse",
        img:"/assets/informatica/mouse.jpg"
    },

    {   
        si: "Processador",
        img:"/assets/informatica/processador.jpg"
    },

    {   
        si: "Recortar",
        img:"/assets/informatica/recortar.jpg"
    },

    {   
        si: "Restaurar",
        img:"/assets/informatica/restaurar.jpg"
    },

    {   
        si: "Salvar",
        img:"/assets/informatica/salvar.jpg"
    },

    {   
        si: "Software",
        img:"/assets/informatica/software.jpg"
    },

    {   
        si: "Sistema Operacional",
        img:"/assets/informatica/sistemaoperacional.jpg"
    },

    {   
        si: "Tabela",
        img:"/assets/informatica/tabela.jpg"
    },

    {   
        si: "Teclado",
        img:"/assets/informatica/teclado.jpg"
    },

    {   
        si: "Upload",
        img:"/assets/informatica/upload.jpg"
    },

    {
      si:"Word",
      img:"/assets/informatica/word.jpg"
    }

    
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Informatica');
  }

  escolher_sinal(index: number){
    let modal = this.modalCtrl.create(InformaticaComponent, { inforsinal: this.sinaisinfor[index] });
    modal.present();
  }

}
