import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {
  constructor() {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email: string = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(observer => {
      if (email === 'iffat@gmail.com') {
        observer.next({emailTaken: true});
        observer.complete();
        // return;
      }
      observer.next(null);
      observer.complete();
    }).pipe(
      delay(1000)
    )

    return httpCallObservable;
  }

  // validate(control: AbstractControl):  Observable<ValidationErrors | null> {
  //   const email: string = control.value;
  //
  //   return of({
  //     emailTaken: true
  //   })
  // }


}
