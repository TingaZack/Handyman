import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registration.',
      message: 'Successfully registered.',
      buttons: [{
        text: 'Okay',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          this.router.navigateByUrl('login');
        }
      }]
    });
    await alert.present();
    // const { role } = await alert.onDidDismiss();
    // this.navCtrl.pop();
    // console.log('onDidDismiss resolved with role', role);
  }


}
