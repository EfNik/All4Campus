import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

  Email: string;
  Password: string;
  Firstname: string;
  Lastname: string;


  sendRegistration(){

    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let body = {
      email: this.Email,
      password: this.Password,
      fistname: this.Firstname,
      lastname: this.Lastname
    };

    this.http.post("http://127.0.0.1:8080/api/signup",body).subscribe(data =>{
      console.log(data);
    });
  }

  // sendRegistration(){

  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');

  //   let body = {
  //     email: this.Email,
  //     password: this.Password,
  //     fistname: this.Firstname,
  //     lastname: this.Lastname
  //   };

  //   this.http.post("http://192.168.1.2:8080/api/signup",body).subscribe(data =>{
  //     console.log(data);
  //   });
  // }

}
