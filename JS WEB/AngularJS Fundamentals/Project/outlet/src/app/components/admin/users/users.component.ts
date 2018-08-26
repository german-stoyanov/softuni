import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user-service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('list1',[
      transition('void => *',[style({
        opacity: 0,
        transform: 'translateX(-100px)'
      }),animate(600)]),
      transition('* => void',[animate(600,style({
        transform: 'translateX(100px)',
        opacity:0
      }))])
    ])
  ]
})
export class UsersComponent implements OnInit {
  users
  constructor(private service: UserService) { }

  removeUser(id){
    let itemToDelete = this.users.filter(x=>x._id===id)[0]
    let index = this.users.indexOf(itemToDelete)
    this.users.splice(index,1);
    this.service.remove(id).subscribe()
  }

  ngOnInit() {
   this.service.getAll().subscribe((data: Array<Object>)=>this.users=data.filter(x=>x['username']!=='admin'))
  }

}
