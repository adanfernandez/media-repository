import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ValidationErrors, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss']
})
export class ValidationErrorComponent implements OnInit, OnChanges, OnDestroy {


  @Input()
  control: AbstractControl;

  @Input()
  touched: boolean;

  @Input()
  _errors;

  @Input()
  private _validations;

  public messages = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges() { }

  ngOnDestroy() { }


  @Input()
  set validations(validations: ValidationErrors) {
    this._validations = validations;
    this.onChangeInput();
  }

  @Input()
  set errors(errors) {
    this._errors = errors;
    this.onChangeInput();
  }

  onChangeInput() {
    if (this._errors && this._validations) {
      for (const validation of Object.keys(this._validations)) {
        const error = this._errors[validation];
        const msg = this._validations[validation];
        if (error) {
          if (!this.messages.includes(msg)) {
            this.messages.push(msg);
          }
        } else {
          const i = this.messages.indexOf(msg);
          if (i !== -1 ) {
              this.messages.splice( i, 1 );
          }
        }
      }
    }
  }
}
