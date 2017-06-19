import { InformaticaComponent } from './informatica.component';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Informatica } from './informatica';

@NgModule({
  declarations: [
    Informatica,
    InformaticaComponent
  ],
  imports: [
    IonicPageModule.forChild(Informatica),
  ],
  entryComponents:[
    Informatica,
    InformaticaComponent
  ],
  exports: [
    Informatica,
    InformaticaComponent
  ]
})
export class InformaticaModule {}
