import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
// import { HomePage } from 'src/app/home/home.page';


@Component({
  selector: 'app-contactnew',
  templateUrl: './contactnew.page.html',
  styleUrls: ['./contactnew.page.scss'],
})
export class ContactnewPage implements OnInit {

  constructor(public http:HttpClient,private router: Router) { }

  ngOnInit() { }


  place: string;
  Report: string;

  sendReport() {
    // console.log(localStorage.getItem("token"));
    var body = {token:localStorage.getItem("token"),place: this.place,issue: this.Report};
    this.http.post("http://127.0.0.1:8080/api/reports",body).subscribe(data =>{
    // this.http.post("http://44.201.231.57/api/reports",body).subscribe(data =>{
      
      // this.router.navigate(["./login"]);
      console.log(data);
      // this.redirectToHome();
      alert("Thank you for reporting an issue!");
      window.location.reload();
      
      
    });
  }

  // redirectToHome(){
    
  //   this.router.navigate(["/home"]);
  // }
  
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-contactnew',
//   templateUrl: './contactnew.page.html',
//   styleUrls: ['./contactnew.page.scss'],
// })
// export class ContactnewPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }