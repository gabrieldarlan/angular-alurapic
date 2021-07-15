import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';
import { SignUpService } from './signup.service';

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService {
  constructor(private signUpSerice: SignUpService) {}

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((userName) =>
            this.signUpSerice.checkUserNameTaken(userName)
          )
        )
        .pipe(map((isTaken) => (isTaken ? { userNameTaken: true } : null)))
        .pipe(first());
    };
  }
}
