import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { LoginService } from '../Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData = {
    username:'',
    password :'',
  };


  constructor(/*private snack:MatSnackBar,*/private login:LoginService) { }

  ngOnInit(): void {
  }


  formSubmit(){

    //console.log("clicked");

    if(this.loginData.username.trim() == '' || this.loginData.username == null){

      Swal.fire('Champ obligatoire !!', 'Username est un champ obligatoire', 'error');

    /*  this.snack.open('Username est un champ obligatoire', '',{
        duration:3000,
      });*/

      return; 
    }

    if(this.loginData.password.trim() == '' || this.loginData.password == null){

      Swal.fire('Champ obligatoire !!', 'Password est un champ obligatoire', 'error');


    /*  this.snack.open('password est un champ obligatoire', '',{
        duration:3000,
      });*/

      return; 
    }

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("succes");
        console.log(data);
      },
      (error)=>{
        console.log("Error");
        console.log(error);
      }
    );



  }

}
