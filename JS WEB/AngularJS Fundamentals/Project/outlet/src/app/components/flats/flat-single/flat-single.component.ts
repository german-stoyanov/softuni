import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlatService } from '../../../core/services/flat-service';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';


@Component({
  selector: 'app-flat-single',
  templateUrl: './flat-single.component.html',
  styleUrls: ['./flat-single.component.css']
})
export class FlatSingleComponent implements OnInit {
  @Input('data') data: Object
  @Output() onDelete = new EventEmitter<string>()
  @Output() changeArray = new EventEmitter<Object>()
 
  include

  constructor(private service: FlatService, private router: Router, private AuthService: AuthService) {}

  deleteItem(id){
    this.service.delete(id).subscribe()
    this.onDelete.emit(id)
  }

  addToFav(id){
    let username = sessionStorage.getItem('username')
    this.service.getById(id).subscribe(data=>{
      if(data['users'].includes(username)){
        let index = data['users'].indexOf(username)
        data['users'].splice(index,1)
        data['removal'] = true
        this.include = false
        if(this.router.url.indexOf('mine')!==-1){
          this.onDelete.emit(id)
        }
        this.changeArray.emit(data)
      }else{
        data['removal'] = false
        data['users'].push(username)
        this.include = true;
        this.changeArray.emit(data)
      }
      this.service.edit(id,data).subscribe()
    })
  }

  ngOnInit() {
    console.log('ban ban')
    this.include = this.data['users'].includes(sessionStorage.getItem('username'))
  }

}
