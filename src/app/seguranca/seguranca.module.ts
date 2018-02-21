import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Http, RequestOptions} from '@angular/http';

import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';

import {LoginFormComponent} from './login-form/login-form.component';
import {SegurancaRoutingModule} from './seguranca-routing.module';
import {AuthService} from './auth.service';
import {MoneyHttp} from './money-http';

export function authHttpServiceFactory(auth: AuthService, http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [
      {'Content-Type': 'application/json'}
    ]
  });

  return new MoneyHttp(auth, config, http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,

    SegurancaRoutingModule
  ],
  declarations: [LoginFormComponent],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [AuthService, Http, RequestOptions]
    }
  ]
})
export class SegurancaModule {
}
