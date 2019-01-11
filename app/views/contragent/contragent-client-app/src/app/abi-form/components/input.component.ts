import { Component, OnInit, Input, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'abi-form-input',
  template: `
    <div>
      <label for="name">{{label}}</label>
      <br/>
      <input type="text" [(ngModel)]="_value" (input)="onChange($event)" />
    </div>
  `,
  styles: [`
    label {
        color: lime;
    }
  `],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor, OnInit {
  _value = '';
  onTouched: Function;
  @Input() control: FormControl;
  @Input() label: String;

  ngOnInit() {
    console.log(this.control)
  }

  @HostListener('click') click() {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  propagateChange: any = () => {};

  writeValue(value: any) {
    console.log('this value', value);
    if ( value ) {
     this._value = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange(event) {
    this.propagateChange(event.target.value);
  }
}
