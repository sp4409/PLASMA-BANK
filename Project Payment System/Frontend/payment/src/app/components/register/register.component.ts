import { Component } from '@angular/core';
import { FetchdataService } from 'src/app/service/fetchdata.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fetchDataservice:FetchdataService) { }

  register(registerForm: {email:string, password:string, biller:string, autopay:string, accNo:number}){
    this.fetchDataservice.register(registerForm).subscribe((response: any)=>{
      console.log(response);
  })
  }
}
