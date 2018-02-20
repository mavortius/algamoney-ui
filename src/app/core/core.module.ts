import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {registerLocaleData} from '@angular/common';
import {RouterModule} from '@angular/router';
import localePt from '@angular/common/locales/pt';
import {Title} from '@angular/platform-browser';

import {JwtHelper} from 'angular2-jwt';
import {ToastyModule} from 'ng2-toasty';
import {ConfirmDialogModule} from 'primeng/primeng';
import {ConfirmationService} from 'primeng/api';

import {NavbarComponent} from './navbar/navbar.component';
import {ErrorHandlerService} from './error-handler.service';
import {LancamentoService} from '../lancamentos/lancamento.service';
import {PessoaService} from '../pessoas/pessoa.service';
import {CategoriaService} from '../categorias/categoria.service';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada.component';
import {AuthService} from '../seguranca/auth.service';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule,
    RouterModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    ErrorHandlerService,
    AuthService,

    ConfirmationService,
    JwtHelper,
    Title,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule {
}
