import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  users:any;
  constructor(private userService:UserService) { }
  show=false;
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      
      this.users=data;
     
    })
  }
  toViewMore(){
    this.show=true;
  }
}
