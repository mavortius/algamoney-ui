import {Injectable} from '@angular/core';

import {AuthService} from './auth.service';
import {environment} from '../../environments/environment';
import {MoneyHttp} from './money-http';

@Injectable()
export class LogoutService {

  tokensRevokeUrl = `${environment.apiUrl}/tokens/revoke`;

  constructor(private http: MoneyHttp,
              private auth: AuthService) {
  }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, {withCredentials: true})
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
      });
  }
}
