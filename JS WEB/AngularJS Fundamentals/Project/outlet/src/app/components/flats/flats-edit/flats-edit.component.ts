import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlatService } from '../../../core/services/flat-service';
import { BrokerService } from '../../../core/services/broker-service';
import { FlatModel } from '../../../core/models/FlatModel';

@Component({
  selector: 'app-flats-edit',
  templateUrl: './flats-edit.component.html',
  styleUrls: ['./flats-edit.component.css']
})
export class FlatsEditComponent implements OnInit {
  flat: FlatModel
  brokers
  id: string

  constructor(private route: ActivatedRoute, private flatService: FlatService, private brokerService: BrokerService) { 
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.flatService.getById(this.id).subscribe(data=>this.flat=data)
    this.brokerService.getAll().subscribe(data=>this.brokers=data)
  }

  edit(){
    this.flatService.edit(this.id,this.flat).subscribe()
  }

}
