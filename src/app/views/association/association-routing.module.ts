import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from '../admin/admin.component';
import {NgModule} from '@angular/core';
import {AssociationComponent} from './association.component';
import {AnnoncesComponent} from './annonces/annonces.component';
import {AjouterAnnonceComponent} from './annonces/ajouter-annonce/ajouter-annonce.component';
import {EvenementsComponent} from './evenements/evenements.component';
import {AjouterEvenementComponent} from './evenements/ajouter-evenement/ajouter-evenement.component';
import {ProfileComponent} from './profile/profile.component';

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
      path: 'association/evenements',
      component: EvenementsComponent,
      data: {
        title: 'Evnements'
      }
    },
    {
      path: 'association/evenements/ajouter',
      component: AjouterEvenementComponent,
      data: {
        title: 'Evnements'
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
    },
    {
      path: 'association/profile',
      component: ProfileComponent,
      data: {
        title: 'profile'
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
