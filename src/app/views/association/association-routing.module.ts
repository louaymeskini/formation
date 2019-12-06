import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from '../admin/admin.component';
import {NgModule} from '@angular/core';
import {AssociationComponent} from './association.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'association'
  },
  children: [
    {
      path: 'association',
      component: AssociationComponent,
      data: {
        title: 'association'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociationRoutingModule {
}
