import { FormControl } from '@angular/forms';

export class EqualValidator {
  static IsEqual(control: FormControl, secondControl: FormControl) {
    if (control.value != secondControl.value)
      return { 'IsEqual': true };
    return null;
  }
}



