import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // property/variable
  aim = 'Your Perfect Banking Partner'

  account = 'Enter your Account Here'

  acno = ''

  pswd = ''

  // data base-Bank
  userDetails:any = {
    1000: { accno: 1000, username: 'Neer', password: 1000, balance: 5000 },
    1001: { accno: 1001, username: 'Laisha', password: 1001, balance: 4000 },
    1002: { accno: 1002, username: 'Vyom', password: 1002, balance: 6000 }
  }

  // Constructor
  constructor() { }

  // ngInit
  ngOnInit(): void {

  }
  // user defined function

  // acnoChange()
  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno)
  }

  // pswdChange()
  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd)
  }

  // // login
  // login() {
  //   // alert('Login Clicked')
  //   var acno = this.acno
  //   var pswd = this.pswd

  //   let userDetails = this.userDetails

  //   if(acno in userDetails){
  //     if (pswd == userDetails[acno]['password']){
  //       alert('Login Successful')
  //     }
  //     else{
  //       alert('Incorrect Password')
  //     }
  //     }
  //     else{
  //       alert('User doesnot Exist!!')
  //     }
  //   }
  // }



  // login with 2 arg -template referance
  login(a:any,p:any) {
    // console .log(a.value);
    var acno = a.value
    var pswd = p.value

    let userDetails = this.userDetails

    if(acno in userDetails){
      if (pswd == userDetails[acno]['password']){
        alert('Login Successful')
      }
      else{
        alert('Incorrect Password')
      }
      }
      else{
        alert('User doesnot Exist!!')
      }
    }
  }

