import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  constructor(private service: AuthService) { }

  logout(){
    this.service.logout().subscribe()
    sessionStorage.clear()
  }

  ngOnInit() {
    
  }

}
