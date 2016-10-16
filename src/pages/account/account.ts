import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class Account {

  authType: string; 
  // details: UserDetails = {'email': 'hi@ionic.io', 'password': 'puppies123'};

  constructor(public navCtrl: NavController, public auth: Auth, public user: User) {
    this.authType = "login";
    
  }

  // signup(){
    
  //   this.auth.signup(this.details).then(() => {
  //     // `this.user` is now registered
  //   }, (err: IDetailedError<string[]>) => {
  //     for (let e of err.details) {
  //       if (e === 'conflict_email') {
  //         alert('Email already exists.');
  //       } else {
  //         // handle other errors
  //       }
  //     }
  //   });
  // }

  loginGoogle(){
    this.auth.login('google').then((success) => {
            const fullName = this.user.social.google.data.full_name;
            const email = this.user.social.google.data.email;
            const profilePic = this.user.social.google.data.profile_picture;
            
            this.navCtrl.push(HomePage, {
            fullName, email, profilePic
            });
            
        }, (error) => {
            alert(error);
        });
  }

  loginFb(){
    this.auth.login('facebook').then((success) => {
            const fullName = this.user.social.facebook.data.full_name;
            const email = this.user.social.facebook.data.email;
            const profilePic = this.user.social.facebook.data.profile_picture;
            
            this.navCtrl.push(HomePage, {
            fullName, email, profilePic
            });
            
        }, (error) => {
            alert(error);
        });
  }

  loginGit(){
    this.auth.login('github').then((success) => {
            const fullName = this.user.social.github.data.full_name;
            const email = this.user.social.github.data.email;
            const profilePic = this.user.social.github.data.profile_picture;
            
            this.navCtrl.push(HomePage, {
            fullName, email, profilePic
            });
            
        }, (error) => {
            alert(error);
        });
  }

}
