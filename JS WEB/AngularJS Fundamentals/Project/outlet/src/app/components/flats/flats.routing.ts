import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatsDetailsComponent } from './flats-details/flats-details.component';
import { FlatsEditComponent } from './flats-edit/flats-edit.component';
import { FlatsAllComponent } from './flats-all/flats-all.component';
import { FlatsCreateComponent } from './flats-create/flats-create.component';
import { UserGuardGuard } from '../../core/guards/user-guard.guard';
import { AdminGuard } from '../../core/guards/admin.guard';

const routes : Routes = [
    {path: 'details/:id', canActivate: [UserGuardGuard],component: FlatsDetailsComponent},
    {path: 'edit/:id', canActivate: [AdminGuard],component: FlatsEditComponent},
    {path: ':category/:type', canActivate: [UserGuardGuard],component: FlatsAllComponent},
    {path: 'create', canActivate: [AdminGuard],component: FlatsCreateComponent},
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FlatsRoutingModule {  }