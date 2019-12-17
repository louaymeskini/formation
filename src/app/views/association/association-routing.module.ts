import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from '../admin/admin.component';
import {NgModule} from '@angular/core';
import {AssociationComponent} from './association.component';
import {AnnoncesComponent} from './annonces/annonces.component';
import {AjouterAnnonceComponent} from './annonces/ajouter-annonce/ajouter-annonce.component';

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
    },
    {
      path: 'association/annonces',
      component: AnnoncesComponent,
      data: {
        title: 'Annonces'
      }
    },
    {
      path: 'association/annonces/ajouter',
      component: AjouterAnnonceComponent,
      data: {
        title: 'Ajouter Annonces'
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
