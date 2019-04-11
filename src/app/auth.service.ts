import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private settings = {
    authServer: 'https://angular-schule.eu.auth0.com',
    clientId: 'myb1GOMpODqAaBnS51F9YWhzL13pSyfx',
    redirectUri: 'http://localhost:4200',
    audience: 'https://api.angular.schule'
  };

  constructor(private ar: ActivatedRoute) {
    this.handleAuth();
  }

  authorize() {
    const url = `${this.settings.authServer}/authorize?`
      + 'response_type=token&'
      + `redirect_uri=${this.settings.redirectUri}&`
      + `client_id=${this.settings.clientId}&`
      + `audience=${this.settings.audience}`;
    location.href = url;
  }

  handleAuth() {
    this.ar.fragment.pipe(
      filter(fragment => !!fragment),
      map(fragment => new URLSearchParams(fragment).get('access_token'))
    ).subscribe(token => {
      sessionStorage.setItem('access_token', token);
      window.location.hash = '';
    });
  }
}
