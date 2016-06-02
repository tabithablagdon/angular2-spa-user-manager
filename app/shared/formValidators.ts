import {Control} from '@angular/common';

export class FormValidators {

  static validEmail(control: Control) {
    const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = emailTest.test(control.value);

    return isValid ? null : {validEmail: true};

  }

}
