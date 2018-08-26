
import { NgModule } from '@angular/core';




import { FormsModule } from '@angular/forms';





import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from '../../app.routing';

import { FlatService } from '../../core/services/flat-service';
import { BrokerService } from '../../core/services/broker-service';

import { CommonModule } from '@angular/common';


import { BrokersAllComponent } from './brokers-all/brokers-all.component';
import { BrokerDetailsComponent } from './broker-details/broker-details.component';
import { BrokerSingleComponent } from './broker-single/broker-single.component';
import { BrokersCreateComponent } from './brokers-create/brokers-create.component';
import { BrokerRoutingModule } from './broker-routing';





@NgModule({
  declarations: [
    BrokersAllComponent,
    BrokerDetailsComponent,
    BrokerSingleComponent,
    BrokersCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrokerRoutingModule
  ],
  providers: [
    FlatService,
    BrokerService
  ]
})
export class BrokerModule { }