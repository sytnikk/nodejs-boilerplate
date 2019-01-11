import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-radio',
  template: `
    <label for="name">имя</label>
    <br/>
    <input type="text" id="name" formControlName="name" />
  `,
  styles: [`
    label {
        color: lime;
    }
  `]
})
export class RadioComponent implements OnInit {
  ngOnInit() {
  }
}
