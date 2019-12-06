import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [{
  path: '',
  data: {
    title: 'Welcome'
  },
  children: [
    {
      path: 'login',
      component: AuthComponent,
      data: {
        title: 'login'
      }
    },
    {
      path: 'register',
      component: RegisterComponent,
      data: {
        title: 'register'
      }
    }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
