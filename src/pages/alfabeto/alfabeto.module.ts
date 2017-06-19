import { AlfabetoComponent } from './alfabeto.component';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Alfabeto } from './alfabeto';

@NgModule({
  declarations: [
    Alfabeto,
    AlfabetoComponent
  ],
  imports: [
    IonicPageModule.forChild(Alfabeto),
  ],
  entryComponents:[
    Alfabeto,
    AlfabetoComponent
  ],
  exports: [
    Alfabeto,
    AlfabetoComponent
  ]
})
export class AlfabetoModule {}
