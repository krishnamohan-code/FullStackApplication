import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/model/User';
import { HttpClientService } from 'src/app/service/http-client.service.component';
import { Router } from '@angular/router';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

@Input()
user:User

@Output()
userAddEvent = new EventEmitter();

newUser:User;
constructor(private httpClientService:HttpClientService,private router:Router) {}

ngOnInit(){
  this.newUser=this.user;
}

addUser(){
  this.httpClientService.addUser(this.newUser).subscribe((user)=>{
  this.userAddEvent.emit(null);
  this.router.navigate(['admin','users']);});
}
}
