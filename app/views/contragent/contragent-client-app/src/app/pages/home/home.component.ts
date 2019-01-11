import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HomeFormService } from './home-form.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeFormService]
})
export class HomePageComponent {
  get form(): FormGroup {
    return this.homeFormService.Form;
  }
  constructor(
    private homeFormService: HomeFormService
  ) {}

  public onSubmit(): void {
    console.log(this.form);
  }
}
