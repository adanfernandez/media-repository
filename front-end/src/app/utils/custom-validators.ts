import { FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {

    public static EMAIL_PATTERN: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public static PASSWORD_PATTERN: RegExp = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;



    /**
     * Método para comprobar si un email tiene la estructura correcta.
     * @param email a validar
     */
    public static isEmail(email: string): boolean {
    if (email) {
        const emailString = email.toString();
        const emailRexp = this.EMAIL_PATTERN;
        return emailRexp.test(emailString);
    }
    return true;
    }

    /**
     * Método para comprobar si texto pasado tiene complejidad suficiente para actuar como contraseña
     * @param password a validar
     */
    public static checkComplexity(password: string): boolean {
      if (password) {
          const passwordString = password.toString();
          const passwordRexp = this.PASSWORD_PATTERN;
          return passwordRexp.test(passwordString);
      }
      return true;
      }








      /////////////////////////////////////////////////////////////////////////
      //                                                                     //
      //                                                                     //
      //                       VALIDACIONES DE CONTROLS                      //
      //                                                                     //
      //                                                                     //
      /////////////////////////////////////////////////////////////////////////

    /**
     * Método para comprobar que un control cumple la validación de que su value sea un email.
     * @param control a validar
     */
    public static emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
      if (!control.value || control.value === '') {
          return;
      } else {
          if (CustomValidators.isEmail(control.value)) {
              return null;
          }
      }
      return { email: true };
    }


    /**
     * Método para comprobar que un control cumple la validación de que su value tenga uan complejidad mínima para actuar como contraseña.
     * @param control a validar
     */
    public static passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
      if (!control.value || control.value === '') {
          return;
      } else {
          if (CustomValidators.checkComplexity(control.value)) {
              return null;
          }
      }
      return { password: true };
    }




    public static fieldsEquals(fields: string[], fieldError) {
        return (formGroup: FormGroup) => {
            if (!fields || fields.length === 0) {
              return null;
            }
            const values: string[] = [];
            for (const field of fields) {
              if (!formGroup.get(field).value) {
                return null;
              }
              values.push(formGroup.get(field).value);
            }
            const condicionError = !values.every(v => v === values[0]);
            return this.getError('fieldsNotEqual', condicionError, formGroup, fieldError);
          };
    }

    private static getError(errorName: string, condicionError: boolean, formGroup: FormGroup, fieldsError: string[]) {
        const error = {};
        if (!condicionError) {
          for (const field of fieldsError) {
            const formControl = formGroup.get(field);
            if (formControl.errors && formControl.errors[errorName]) {
              delete formControl.errors[errorName];
              // Marcamos el formulario como que no ha sido modificado
              formControl.markAsPristine();
              formControl.updateValueAndValidity();
            }
          }
        } else {
          for (const field of fieldsError) {
            const formControl = formGroup.get(field);
            error[errorName] = true;
            formControl.setErrors(error);
            formControl.markAsDirty();
          }
        }
        return error;
      }
}
