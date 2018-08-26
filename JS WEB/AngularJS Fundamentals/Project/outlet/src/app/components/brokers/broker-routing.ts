import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokersCreateComponent } from './brokers-create/brokers-create.component';
import { BrokersAllComponent } from './brokers-all/brokers-all.component';
import { BrokerDetailsComponent } from './broker-details/broker-details.component';
import { AdminGuard } from '../../core/guards/admin.guard';
import { UserGuardGuard } from '../../core/guards/user-guard.guard';

const routes : Routes = [
    {path: 'create', canActivate: [AdminGuard],component: BrokersCreateComponent},
    {path: 'all', canActivate: [UserGuardGuard],component: BrokersAllComponent},
    {path: 'details/:id', canActivate: [UserGuardGuard],component: BrokerDetailsComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BrokerRoutingModule {  }