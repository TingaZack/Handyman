import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
 
  serviceListMD = [{
    id: 0,
    name: 'Lahya Haidula',
    img: 'https://media.istockphoto.com/videos/closeup-of-young-woman-fixing-sink-pipe-with-adjustable-wrench-in-video-id1053465658?s=640x640',
    availableWeekDays: 'Mon - Sat',
    availableTimeSlot: '6am - 1pm',
    pricePerHr: '100-200',
    workExp: '3 Yrs.',
    category: 'Plumber',
  }, {
    id: 1,
    name: 'Pefimbo Shipunda',
    img: 'https://us.123rf.com/450wm/auremar/auremar2002/auremar200203192/140594444-plumber-woman-builder-fixing-heating-system-pipes.jpg?ver=6',
    availableWeekDays: 'Fri - Sat',
    availableTimeSlot: '5am - 10am',
    pricePerHr: '100-200',
    workExp: '3 Yrs.',
    category: 'Plumber',
  }, {
    id: 0,
    name: 'Matilda Boone',
    img: '../../assets/imgs/user.jpeg',
    availableWeekDays: 'Sat - Sun',
    availableTimeSlot: '9am - 8pm',
    pricePerHr: '100-200',
    workExp: '3 Yrs.',
    category: 'Plumber',
  }, {
    id: 2,
    name: 'Jack Mailula',
    img: 'https://thumbs.dreamstime.com/b/afro-american-woman-craftswoman-working-her-workshop-young-woman-doing-woodwork-workshop-118711127.jpg',
    availableWeekDays: 'Mon - Sat',
    availableTimeSlot: '7am - 17pm',
    pricePerHr: '100-200',
    workExp: '3 Yrs.',
    category: 'Carpenter',
  }, {
    id: 3,
    name: 'Paul Heyman',
    img: 'https://c8.alamy.com/comp/DC3T22/female-welder-watches-sparks-DC3T22.jpg',
    availableWeekDays: 'Mon - Sat',
    availableTimeSlot: '7am - 17pm',
    pricePerHr: '100-200',
    workExp: '3 Yrs.',
    category: 'Welder',
  }, {
    id: 4,
    name: 'Ken Beyern',
    img: 'https://t3.ftcdn.net/jpg/03/20/63/12/360_F_320631281_WXoq4Kyc3sYJGhJBwcyraBJrHHkFquTC.jpg',
    availableWeekDays: 'Mon - Sat',
    availableTimeSlot: '7am - 17pm',
    pricePerHr: '100-200',
    workExp: '3 Yrs.',
    category: 'Electrician',
  }, {
    id: 5,
    name: 'Vusi Mahlangu',
    img: 'https://c8.alamy.com/comp/CP01PR/women-working-outside-cleaning-snow-in-front-of-house-CP01PR.jpg',
    availableWeekDays: 'Mon - Sat',
    availableTimeSlot: '7am - 17pm',
    pricePerHr: '100-200',
    workExp: '3 Yrs.',
    category: 'Outdoor',
  }, {
    id: 6,
    name: 'Berta Ndongo',
    img: 'https://thumbs.dreamstime.com/z/woman-helmet-tools-11562354.jpg',
    availableWeekDays: 'Mon - Sat',
    availableTimeSlot: '7am - 17pm',
    pricePerHr: '100-200',
    workExp: '3 Yrs.',
    category: 'Carpenter',
  },]

  constructor(private router: Router, private menu: MenuController) {
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  
  goToProfile() {
    this.router.navigateByUrl('profile');
  }

  goToView(items) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        personDetails: JSON.stringify(items),
      },
    };
    this.router.navigate(['view-screen'], navigationExtras);

  }

}
