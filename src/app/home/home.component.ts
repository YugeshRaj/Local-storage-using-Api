import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users:any;
  constructor(private userService:UserService,private localStorage:LocalService) { }

  ngOnInit(): void {

    if (localStorage.length > 0){
      //Items are stored in local storage
     
        //this.users=data;
        console.log(JSON.parse(this.localStorage.getData('id') || '{}'));
        this.users=JSON.parse(this.localStorage.getData('id') || '{}');
      
      
  }else{
    this.userService.getUsers().subscribe(data=>{
      //this.users=data;
      this.localStorage.saveData('id',JSON.stringify(data));
      console.log(JSON.parse(this.localStorage.getData('id') || '{}'));
      this.users=JSON.parse(this.localStorage.getData('id') || '{}');
    })
      //Local storage is empty
  }

    // this.userService.getUsers().subscribe(data=>{
    //   //this.users=data;
    //   this.localStorage.saveData('id',JSON.stringify(data));
    //   console.log(JSON.parse(this.localStorage.getData('id') || '{}'));
    //   this.users=JSON.parse(this.localStorage.getData('id') || '{}');
    // })
  }

}
