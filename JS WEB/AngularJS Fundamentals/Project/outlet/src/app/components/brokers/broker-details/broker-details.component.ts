import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../../core/services/broker-service';
import { ActivatedRoute } from '@angular/router';
import { FlatService } from '../../../core/services/flat-service';
import { FlatModel } from '../../../core/models/FlatModel';
import { BrokerModel } from '../../../core/models/BrokerModel';

@Component({
  selector: 'app-broker-details',
  templateUrl: './broker-details.component.html',
  styleUrls: ['./broker-details.component.css']
})
export class BrokerDetailsComponent implements OnInit {
  broker: BrokerModel
  flats: FlatModel[]
  id: string

  constructor(private brokerService: BrokerService,private route: ActivatedRoute, private flatService: FlatService) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.brokerService.getById(this.id).subscribe(data=>this.broker=data)
    this.flatService.getAll().subscribe((data)=>this.flats=data.filter(x=>x['broker']===this.id))
  }

}
