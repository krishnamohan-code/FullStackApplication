import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/User';
import { HttpClientService } from 'src/app/service/http-client.service.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  @Input()
  user:User;
  @Output()
  userDeletedEvent =new EventEmitter();
  constructor(private httpClientService:HttpClientService,private router:Router) { }

  ngOnInit(): void {
  }
    deleteUser()
    {
      this.httpClientService.deleteUser(this.user.id).subscribe(
        (user)=>{this.router.navigate(['admin','users']);
      }
      );
    }
}
