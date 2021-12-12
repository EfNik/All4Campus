import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public http:HttpClient,private router: Router) { }

  ngOnInit() {
    if(!!localStorage.getItem('token')){
      
      this.router.navigate(["../../home"])
      return false
    }
    else{
      return true
    }
  }

  Email: string;
  Password: string;


  sendData(){
    // console.log(this.Email,this.Password)
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let body = {
      email: this.Email,
      password: this.Password
    };

    // this.http.post("http://192.168.1.2:8080/api/login",body).subscribe(data =>{
    //   console.log(data);
    // });
    this.http.post("http://127.0.0.1:8080/api/login",body).subscribe(data =>{
      let status = data[Object.keys(data)[0]];
     
      // console.log(data[Object.keys(data)[0]]);
      // console.log(status)
      // if(status=="success")
      // {
      //   // console.log("great")
      //   this.router.navigate(["../../home"]);
      // }
      if(status=="failure"){
        //
        let reason = data[Object.keys(data)[1]];
        if(reason=="email")
        {
          alert("Account not found")
        }
        else{
          alert("Incorrect password")
        }
        
      }
      else{
        localStorage.setItem('token',status);
        this.router.navigate(["../../home"]);
      }
    });
    
  }

  // loggedIn() {
  //   return !!localStorage.getItem('token');
  // }

}
