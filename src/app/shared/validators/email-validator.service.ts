import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{
  constructor() { }

  validate(control: AbstractControl):  Observable<ValidationErrors | null> {
    const email: string = control.value;

    return of({
      emailTaken: true
    })
  }


}
