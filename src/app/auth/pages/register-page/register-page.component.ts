import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import * as customValidators from "../../../shared/validators/validators";
import {ValidatorsService} from "../../../shared/services/validators.service";
import {EmailValidatorService} from "../../../shared/validators/email-validator.service";

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder,
              private validatorsService: ValidatorsService,
              private emailValidatorService: EmailValidatorService) {
  }

  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }

  protected readonly String = String;
}
