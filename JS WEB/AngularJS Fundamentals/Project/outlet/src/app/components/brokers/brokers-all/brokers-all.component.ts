import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../../core/services/broker-service';
import { BrokerModel } from '../../../core/models/BrokerModel';

@Component({
  selector: 'app-brokers-all',
  templateUrl: './brokers-all.component.html',
  styleUrls: ['./brokers-all.component.css']
})
export class BrokersAllComponent implements OnInit {
  brokers: BrokerModel[]

  constructor(private service: BrokerService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data=>this.brokers=data)
  }

}
