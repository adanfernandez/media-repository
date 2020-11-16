import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './services/register.service';
import { RegisterFormService } from './services/register-form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router, public registerFormService: RegisterFormService) { }

  ngOnInit(): void {
    this.registerFormService.buildForm();
  }

  register() {
    this.registerService?.register(null).subscribe(
        res => {
          this.router.navigateByUrl('/home');
        }
    );
  }

}
