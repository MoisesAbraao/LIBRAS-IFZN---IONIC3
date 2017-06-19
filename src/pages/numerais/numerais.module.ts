import { NumeraisComponent } from './numerais.component';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Numerais } from './numerais';

@NgModule({
  declarations: [
    Numerais,
    NumeraisComponent
  ],
  imports: [
    IonicPageModule.forChild(Numerais),
  ],
  entryComponents:[
    Numerais,
    NumeraisComponent
  ],
  exports: [
    Numerais,
    NumeraisComponent
  ]
})
export class NumeraisModule {}
