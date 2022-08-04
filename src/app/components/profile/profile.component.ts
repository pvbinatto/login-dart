import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServiceService } from 'src/app/services/auth-service.service';

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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userLogin: User = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    id: 0,
    gender: '',
  };

  save = false;

  userFormControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  firstNameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [
    Validators.required,
    Validators['email'],
  ]);
  lastNameControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private _snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
    private route: Router,
    private loginService: AuthServiceService
  ) {}

  ngOnInit(): void {
    let userLog = JSON.parse(localStorage.getItem('data') || '{}');
    this.userLogin.username = userLog.username;
    this.userLogin.password = userLog.password;
    this.userLogin.firstName = userLog.firstName;
    this.userLogin.lastName = userLog.lastName;
    this.userLogin.email = userLog.email;
    this.userLogin.gender = userLog.gender;
  }

  onSubmit() {
    this.spinner.show();

    let data = this.loginService.save().then((data) => {
      this.spinner.hide();
      this.actionForSuccess(data);
    });
  }

  actionForSuccess(forSuccess: any) {
    this._snackBar.open('Registro gravado com sucesso', 'Fechar', {
      duration: 5 * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  actionForFailure(forFailure: any) {
    this._snackBar.open('Erro ao gravar registro', 'Fechar', {
      duration: 5 * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
