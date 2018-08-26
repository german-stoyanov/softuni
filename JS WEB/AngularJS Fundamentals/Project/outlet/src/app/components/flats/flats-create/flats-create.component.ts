import { Component, OnInit } from '@angular/core';
import { FlatService } from '../../../core/services/flat-service';
import { BrokerService } from '../../../core/services/broker-service';
import { FlatModel } from '../../../core/models/FlatModel';

@Component({
  selector: 'app-flats-create',
  templateUrl: './flats-create.component.html',
  styleUrls: ['./flats-create.component.css']
})
export class FlatsCreateComponent implements OnInit {
  brokers

  constructor(private flatService: FlatService, private brokerService: BrokerService) { }

  create(data: FlatModel){
    data.users = []
    this.flatService.create(data).subscribe()
  }

  ngOnInit() {
    this.brokerService.getAll().subscribe(data=>this.brokers=data)
  }

}
