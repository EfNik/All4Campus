import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public http:HttpClient) {}

  goToLogin(){
    this.sendTestData();
    this.navCtrl.navigateForward('/login');
  }

  sendTestData(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let body = {
      message : "Can you hear me?"
    };

    this.http.post("http://192.168.1.2:8080/api/test",body).subscribe(data =>{
      console.log(data);
    });
    
  }

}
