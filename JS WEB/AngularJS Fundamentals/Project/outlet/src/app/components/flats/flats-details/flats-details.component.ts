import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlatService } from '../../../core/services/flat-service';
import { FlatModel } from '../../../core/models/FlatModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flats-details',
  templateUrl: './flats-details.component.html',
  styleUrls: ['./flats-details.component.css']
})
export class FlatsDetailsComponent implements OnInit {

  flat: Observable<FlatModel>

  constructor(private route: ActivatedRoute,private service: FlatService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.flat = this.service.getById(id)

  }

}
