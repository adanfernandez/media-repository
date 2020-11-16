import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class RegisterService {

    public readonly url = `${environment.standardServiceURL}/auth/register`;

    constructor(private httpClient: HttpClient) {
    }

    register(data) {
        return this.httpClient.post(this.url, data);
    }
}