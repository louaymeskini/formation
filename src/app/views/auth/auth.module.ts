import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {getAlertConfig, RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertConfig, AlertModule} from 'ngx-bootstrap/alert';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AuthService} from '../services/auth.service';



@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: AlertConfig,
    useFactory: getAlertConfig }
    ]
})
export class AuthModule { }
