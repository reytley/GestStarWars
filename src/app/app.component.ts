import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyC39Al8cIbDiE4kDoisPCxYGgu995BPSVE",
  authDomain: "managerstarwars.firebaseapp.com",
  databaseURL: "https://managerstarwars.firebaseio.com",
  projectId: "managerstarwars",
  storageBucket: "",
  messagingSenderId: "971405624816",
  appId: "1:971405624816:web:b7d9337177aecd02"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
 
  ) {
    firebase.initializeApp(firebaseConfig);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
