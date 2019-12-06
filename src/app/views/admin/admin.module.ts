import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdminComponent} from './admin.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from '../services/token-interceptor.service';
import { BenevolesComponent } from './benevoles/benevoles.component';
import { AjouterAssociationComponent } from './ajouter-association/ajouter-association.component';
import {AssociationService} from '../services/association.service';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AdminComponent,
    BenevolesComponent,
    AjouterAssociationComponent,
    JwPaginationComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ModalModule,
    AlertModule
  ],
  providers: [AssociationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    TokenInterceptorService
  ]
})
export class AdminModule { }
