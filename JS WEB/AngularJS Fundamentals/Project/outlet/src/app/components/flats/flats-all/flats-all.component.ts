import { Component, OnInit } from '@angular/core';
import { FlatService } from '../../../core/services/flat-service';
import { trigger, transition, animate, style } from '@angular/animations';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FlatModel } from '../../../core/models/FlatModel';

@Component({
  selector: 'app-flats-all',
  templateUrl: './flats-all.component.html',
  styleUrls: ['./flats-all.component.css'],
  animations: [
    trigger('list1',[
      transition('void => *',[style({
        opacity: 0,
        transform: 'translateX(-100px)'
      }),animate(600)]),
      transition('* => void',[animate(600,style({
        transform: 'translateY(-100px)',
        opacity:0
      }))])
    ])
  ]
})
export class FlatsAllComponent implements OnInit {
  allFlats: FlatModel[]
  flats: FlatModel[]
  category: string
  type: string
  constructor(private service: FlatService, private router: Router, private route: ActivatedRoute) { 
    router.events.subscribe((val) =>{ 
      if(val instanceof NavigationEnd){
        this.category = route.snapshot.params['category']
        this.type = route.snapshot.params['type']
        
        if(this.allFlats){
          this.reArangeFlats()
        }
        
      }
    })
    this.delete = this.delete.bind(this)
    
    this.changeArray = this.changeArray.bind(this)
  }

  delete(id){
    let itemToDelete = this.flats.filter(x=>x._id===id)[0]
    let index = this.flats.indexOf(itemToDelete)
    this.flats.splice(index,1)

    if(this.router.url.indexOf('mine')===-1){
      let othIndex = this.allFlats.indexOf(itemToDelete)
      this.allFlats.splice(index,1)
    }
    
  }

  reArangeFlats(){
    if(this.allFlats){
      if(this.type === 'mine'){
        this.flats = this.allFlats.filter(x=>x['users'].includes(sessionStorage.getItem('username')))
      } else{
        this.flats = this.allFlats.filter(x=>x['category']===this.category)
      }
    } 
  }

  changeArray(data){
    let obj = this.allFlats
    let el = obj.filter(x=>x._id===data._id)[0]
    let index = obj.indexOf(el)
    obj[index] = data
    this.allFlats = obj
  }

  ngOnInit() {
    this.service.getAll().subscribe(data=>{
      this.allFlats = data
      this.reArangeFlats()
    })
  }

}
