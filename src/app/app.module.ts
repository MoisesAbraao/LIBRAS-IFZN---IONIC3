import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Alfabeto } from './../pages/alfabeto/alfabeto';
import { Numerais } from './../pages/numerais/numerais';
import { Informatica } from './../pages/informatica/informatica';
import { NumeraisComponent } from './../pages/numerais/numerais.component';
import { InformaticaComponent } from './../pages/informatica/informatica.component';
import { AlfabetoComponent } from './../pages/alfabeto/alfabeto.component';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Alfabeto,
    Informatica,
    Numerais,
    NumeraisComponent,
    InformaticaComponent,
    AlfabetoComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Alfabeto,
    Informatica,
    Numerais,
    NumeraisComponent,
    InformaticaComponent,
    AlfabetoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
