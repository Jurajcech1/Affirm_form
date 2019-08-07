import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';

const moment = _moment;

export const DATE_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

function cardNumberValidator(control) {
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const amExPattern = /^3[47][0-9]{13}$/;
    let valid = visaPattern.test(control.value) || amExPattern.test(control.value);
    if (valid) {
      return null;
    }
    return { 'invalidCardNumber': true }
}

function cardDateValidator(control) {
    let valid = control.value > (new Date());
    if (valid) {
      return null;
    }
    return { 'invalidCardDate': true }
}

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
  ],
})
export class CardInputComponent {

  addressForm = this.fb.group({
    name: [null, Validators.required],
    cardNumber: [null, Validators.compose([
      Validators.required, cardNumberValidator])],
    cvv2: [null, Validators.compose([
      Validators.required, Validators.maxLength(4), Validators.minLength(3)])],
    expirationDate: [null, Validators.compose([
      Validators.required, cardDateValidator])
    ],
  });


  hasValidCVV2 = true;

  constructor(private fb: FormBuilder) {}

  chosenMonthHandler(normalizedMonth, datepicker) {
    const ctrlValue = moment(normalizedMonth);
    this.addressForm.controls['expirationDate'].setValue(ctrlValue);
    datepicker.close();
  }

  onSubmit() {
    alert('Thanks!');
  }
}
