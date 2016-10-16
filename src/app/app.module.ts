import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Account } from '../pages/account/account';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '967522ca'
  }
  // ,
  // 'auth': {
  //   'google': {
  //     'webClientId': '187625703991-mgdp9mhm8vhkrtjv3q84t28ongds8qqi.apps.googleusercontent.com'
  //   }
  // }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Account
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Account
  ],
  providers: []
})
export class AppModule {}
