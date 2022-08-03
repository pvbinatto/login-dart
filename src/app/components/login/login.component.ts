import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { User } from 'src/app/models/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userLogin: User = {
    username: '',
    password: '',
  };

  constructor(private loginService: AuthServiceService, private _snackBar: MatSnackBar, private spinner: NgxSpinnerService) {}

  durationInSeconds = 5;
  hide = true;
  userFormControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  async login() {
    this.spinner.show();
    if (
      !this.userFormControl.hasError('required') &&
      !this.passwordControl.hasError('required')
    ) {
      (await this.loginService.authenticate(this.userLogin)).subscribe(
        (forSuccess: any) => {
          this.spinner.hide();
          this.actionForSuccess(forSuccess);
        },
        (forFailure: any) => {
          this.spinner.hide();
          this.actionForFailure(forFailure);
        }
      );
    }
  }

  actionForSuccess(forSuccess: any) {
    console.log(forSuccess);
  }

  actionForFailure(forFailure: any) {
    this._snackBar.open('Usuário Inválido', 'Fechar', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }
}
