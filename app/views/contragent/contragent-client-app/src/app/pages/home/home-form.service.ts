import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Injectable()
export class HomeFormService {
    public Form: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.Form = this.formBuilder.group({
            gender: ['md', Validators.required],
            name: ['Sashko', Validators.compose([Validators.required, this.NameValidator])],
            she: ['', Validators.compose([Validators.required, this.NameValidator])]
        });
    }

    private NameValidator(control: FormControl): any | null {
      if (!control.root || !control.root['controls']) {
        return null;
      }
      if (control.parent.get('gender').value === 'm') {
        const mRegExp = /[\wа-я]+/;
        return mRegExp.test(control.value) ? null : {
          valid: false,
          msg: 'm'
        };
      }
      if (control.parent.get('gender').value === 'f') {
        const fRegExp = /[a-zA-Z]/;
        return fRegExp.test(control.value) ? null : {
          valid: false,
          msg: 'f'
        };
      }
      if (control.parent.get('gender').value === 'md') {
        const mdRegExp = /^\d+$/;
        return mdRegExp.test(control.value) ? null : {
          valid: false,
          msg: 'md'
        };
      }
    }
}