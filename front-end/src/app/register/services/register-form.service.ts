import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Injectable()
export class RegisterFormService {
    public registerForm: FormGroup;
    public validationsEmail = { required: 'El email es un campo obligatorio',
        email: 'El email introducido no es correcto'
    };
    public validationsPassword = { required: 'La contraseña es un campo obligatorio',
        passwordConfirmation: 'Las contraseñas deben de coincidir'
    };

    constructor() {}

    public buildForm(): void {
        this.registerForm = new FormGroup(
          {
            email: new FormControl(null, [Validators.required, CustomValidators.emailValidator]),
            password: new FormControl(null, [Validators.required]),
            passwordConfirmation: new FormControl(null, [Validators.required]),
          }
        );
      }
}