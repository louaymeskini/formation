import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from '../auth/auth.component';
import {AdminComponent} from './admin.component';
import {BenevolesComponent} from './benevoles/benevoles.component';
import {AjouterAssociationComponent} from './ajouter-association/ajouter-association.component';
import {ProfileComponent} from './profile/profile.component';


const routes: Routes = [{
  path: '',
  data: {
    title: 'admin'
  },
  children: [
    {
      path: 'admin',
      component: AdminComponent,
      data: {
        title: 'admin'
      }
    },
    {
      path: 'admin/association',
      component: AjouterAssociationComponent,
      data: {
        title: 'Ajouter Association'
      }
    },
    {
      path: 'admin/benevoles',
      component: BenevolesComponent,
      data: {
        title: 'Liste Benevoles'
      }
    },
    {
      path: 'admin/profile',
      component: ProfileComponent,
      data: {
        title: 'Profile'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
