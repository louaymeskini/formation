import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AssociationService} from '../../service-layer/store/association/services/association.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from '../services/token-interceptor.service';
import {BenevoleComponent} from './benevole.component';
import {BenevoleService} from '../../service-layer/store/benevole/services/benevole.service';
import {BenevoleRoutingModule} from './benevole-routing.module';

@NgModule({
  declarations: [
    BenevoleComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    AlertModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BenevoleRoutingModule
  ],
  providers: [BenevoleService,
    AssociationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})

export class BenevoleModule {}

