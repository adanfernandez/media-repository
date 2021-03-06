import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Injectable()
export class RegisterFormService {
    public registerForm: FormGroup;
    public validationsEmail = {
      required: 'El email es un campo obligatorio',
      email: 'El email introducido no es correcto'
    };
    public validationsPassword = {
      required: 'La contraseña es un campo obligatorio',
      password: 'La contraseña debe tener un número, una mayúscula y más de 8 caracteres',
    };
    public validationsPasswordConfirmation = {
      required: 'La confirmación de la contraseña es un campo obligatorio',
      fieldsNotEqual: 'Las contraseñas deben de coincidir'
    };

    constructor() {}

    public buildForm(): void {
        this.registerForm = new FormGroup({
            email: new FormControl(null, [Validators.required, CustomValidators.emailValidator]),
            password: new FormControl(null, [Validators.required, CustomValidators.passwordValidator]),
            passwordConfirmation: new FormControl(null, [Validators.required]),
          },
          CustomValidators.fieldsEquals(['password', 'passwordConfirmation'], ['passwordConfirmation'])
          );
        this.registerForm.updateValueAndValidity();
    }
6
    get email() {
      return this?.registerForm?.get('email');
    }

    get password() {
      return this?.registerForm?.get('password');
    }

    get passwordConfirmation() {
      return this?.registerForm?.get('passwordConfirmation');
    }
}
