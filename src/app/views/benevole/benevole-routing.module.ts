import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BenevoleComponent} from './benevole.component';
import {AnnoncesComponent} from './annonces/annonces.component';
import {EvenementsComponent} from './evenements/evenements.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'benevole'
  },
  children: [
    {
      path: 'benevole',
      component: BenevoleComponent,
      data: {
        title: 'benevole'
      }
    },
    {
      path: 'benevole/annonces',
      component: AnnoncesComponent,
      data: {
        title: 'annonces'
      }
    },
    {
      path: 'benevole/evenements',
      component: EvenementsComponent,
      data: {
        title: 'evenements'
      }
    },
    {
      path: 'benevole/profile',
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
export class BenevoleRoutingModule {}
