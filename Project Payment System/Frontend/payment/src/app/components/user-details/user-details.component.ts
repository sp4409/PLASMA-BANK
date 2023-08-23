import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FetchdataService } from 'src/app/service/fetchdata.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  constructor(private fetchDataService:FetchdataService) {}

  v:any = localStorage.getItem('token');
  var1:any = JSON.parse(this.v);
  billerData:any;
  acountdata:any;

  ngOnInit(): void {

  let parms = new HttpParams().set('name', this.var1['biller']);
  this.fetchDataService.getBiller(parms).subscribe(
    (response)=>{
      console.log(response);
      this.billerData = response;

    },
    error=>{
      console.log(error);
  })
  
  let parms1 = new HttpParams().set('email', this.var1['email']);
  this.fetchDataService.getAccount(parms1).subscribe(
    (response)=>{
      console.log(response);
      this.acountdata = response;
    },
    error=>{
      console.log(error);
})



}
}
