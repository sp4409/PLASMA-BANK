import { Component, OnInit } from '@angular/core';
import { FetchdataService } from 'src/app/service/fetchdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  data ={
    email: '',
    password: ''
  }

  constructor(private fetchDataService:FetchdataService, private router:Router) { }

// This api returns user object 
  doSubmitForm(){
     this.fetchDataService.login(this.data).subscribe(
      (response)=>{
        console.log(response);
        localStorage.setItem('token',JSON.stringify(response));
        this.router.navigate(["/loggedin"])
      },
      error=>{
      
  })
}
}
