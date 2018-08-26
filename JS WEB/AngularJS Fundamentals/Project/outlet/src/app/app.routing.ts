import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { FlatsAllComponent } from './components/flats/flats-all/flats-all.component';
import { FlatsCreateComponent } from './components/flats/flats-create/flats-create.component';
import { FlatsEditComponent } from './components/flats/flats-edit/flats-edit.component';
import { FlatsDetailsComponent } from './components/flats/flats-details/flats-details.component';
import { UsersComponent } from './components/admin/users/users.component';
import { BrokersCreateComponent } from './components/brokers/brokers-create/brokers-create.component';
import { BrokersAllComponent } from './components/brokers/brokers-all/brokers-all.component';
import { BrokerDetailsComponent } from './components/brokers/broker-details/broker-details.component';
import { FlatModule } from './components/flats/flats.module';
import { BrokerModule } from './components/brokers/broker.module';
import { AdminGuard } from './core/guards/admin.guard';



const routes : Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/signin' },
  { path: 'home', redirectTo: 'flats/sale/all' },
  { path: 'signin', component:  SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'flats', loadChildren: ()=>FlatModule },
  { path: 'brokers', loadChildren: ()=>BrokerModule },
  { path: 'users', canActivate: [AdminGuard],component: UsersComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {  }