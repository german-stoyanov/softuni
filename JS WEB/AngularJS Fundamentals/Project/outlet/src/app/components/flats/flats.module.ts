import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlatsRoutingModule } from './flats.routing';
import { CommonModule } from '@angular/common';

import { FlatsAllComponent } from './flats-all/flats-all.component';
import { FlatsEditComponent } from './flats-edit/flats-edit.component';
import { FlatsDetailsComponent } from './flats-details/flats-details.component';
import { FlatsCreateComponent } from './flats-create/flats-create.component';
import { FlatSingleComponent } from './flat-single/flat-single.component';

import { FlatService } from '../../core/services/flat-service';
import { BrokerService } from '../../core/services/broker-service';

import { YesornoPipe } from '../../core/pipes/yesorno.pipe';
import { HighlightDirective } from '../../core/directives/highlight.directive';
import { AuthService } from '../../core/services/auth-service';

@NgModule({
  declarations: [
    FlatsAllComponent,
    FlatsDetailsComponent,
    FlatsEditComponent,
    FlatSingleComponent,
    FlatsCreateComponent,
    YesornoPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    FlatsRoutingModule,
  ],
  providers: [
    FlatService,
    BrokerService,
    AuthService
  ]
})
export class FlatModule { }
