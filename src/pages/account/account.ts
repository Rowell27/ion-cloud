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
  pword: string;
  e_mail: string;
  fname: string;
  lname: string;
  full_name: string;

  authType: string; 
  
  

  constructor(public navCtrl: NavController, public auth: Auth, public user: User) {
    this.authType = "login";
  }


  signup(){
    this.full_name = this.fname + " " + this.lname;
    
    let details: UserDetails = {
      name: this.full_name,
      email: this.e_mail,
      password : this.pword
    };
    // console.log(this.details.email + this.details.name + this.details.password);
    this.auth.signup(details).then((sucess) => {
      
      this.user.details.name = details.name;
      this.user.details.email = details.email;
      this.user.details.password = details.password ;

      alert('Registered successfully!');
      // return this.auth.login('basic', details);
      
    }, (err: IDetailedError<string[]>) => {
      for (let e of err.details) {
        if (e === 'conflict_email') {
          alert('Email already exists.');
        } else {
          alert(e);
        }
      }
    });
  }

  login(){
    let details: UserDetails = {
      name: this.full_name,
      email: this.e_mail,
      password : this.pword
    };
    
    this.auth.login('basic', details).then((sucess) => {
      const fullName = this.user.details.name;
      const email = this.user.details.email;
      
      // alert(fullName + " " + email);
      this.navCtrl.push(HomePage, {
            fullName, email
            });
    }, (error) => {
      alert(error)
    });
  }

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

  loginTwitter(){
    this.auth.login('twitter').then((success) => {
            const fullName = this.user.social.twitter.data.full_name;
            const email = this.user.social.twitter.data.email;
            const profilePic = this.user.social.twitter.data.profile_picture;
            
            this.navCtrl.push(HomePage, {
            fullName, email, profilePic
            });
            
        }, (error) => {
            alert(error);
        });
  }
}
