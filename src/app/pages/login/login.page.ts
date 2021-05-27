import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password ='';
  constructor(private router: Router, private toastController: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  login() {
    console.log(this.email, this.password);
    if (this.email.trim() != '' && this.password.trim() != '') {
      this.navCtrl.navigateRoot('folder');
    } else {
      this.presentToast();
    }
    // 
  }
  register() {
    this.router.navigateByUrl('register');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Field(s) missing, please try again...',
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }


}
