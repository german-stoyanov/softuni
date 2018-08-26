import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../../core/services/broker-service';
import { BrokerModel } from '../../../core/models/BrokerModel';

@Component({
  selector: 'app-brokers-create',
  templateUrl: './brokers-create.component.html',
  styleUrls: ['./brokers-create.component.css']
})
export class BrokersCreateComponent implements OnInit {

  constructor(private service: BrokerService) { }

  create(body: BrokerModel){
    this.service.create(body).subscribe()
  }

  ngOnInit() {
  }

}
