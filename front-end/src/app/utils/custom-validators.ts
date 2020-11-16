import { FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {

    public static EMAIL_PATTERN: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
}
