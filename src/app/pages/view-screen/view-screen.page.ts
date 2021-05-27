import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-screen',
  templateUrl: './view-screen.page.html',
  styleUrls: ['./view-screen.page.scss'],
})
export class ViewScreenPage implements OnInit {

  data;
  constructor(private route: ActivatedRoute, private router: Router, 
    private alertController: AlertController, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (params && params.personDetails) {
        this.data = JSON.parse(params.personDetails);
        console.log(this.data);
        
      }
    });
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Booking Successful',
      message: 'Thank you for reaching out to us. We will send you a quotation shortly.',
      buttons: ['OK']
    });
    await alert.present();
    // const { role } = await alert.onDidDismiss();
    // this.navCtrl.pop();
    // console.log('onDidDismiss resolved with role', role);
  }

}
