import { Component, OnInit, Input } from '@angular/core';
import { BrokerModel } from '../../../core/models/BrokerModel';

@Component({
  selector: 'app-broker-single',
  templateUrl: './broker-single.component.html',
  styleUrls: ['./broker-single.component.css']
})
export class BrokerSingleComponent implements OnInit {
  @Input('data') data: BrokerModel

  constructor() { }

  ngOnInit() {
    console.log('here')
  }

}
