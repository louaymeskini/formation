import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AssociationComponent} from './association.component';
import {AssociationRoutingModule} from './association-routing.module';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AssociationComponent
  ],
  imports: [
    CommonModule,
    AssociationRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class AssociationModule {
}
