import {AbstractControl} from '@angular/forms';
import * as moment from 'moment';
import {formatDate} from '@angular/common';

export class DateValidator {
  static dateValidator(AC: AbstractControl) {
    const currentDate = formatDate(new Date(), 'YYYY-MM-DD', 'en-US');
    const myDate =  moment(AC.value, 'YYYY-MM-DD').utc();
    if (myDate.isSameOrAfter(moment(undefined, 'YYYY-MM-DD'))) {
      return {'dateValidator': true};
    }
    return false;
  }
}
