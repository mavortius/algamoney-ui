import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

import {ToastyModule} from 'ng2-toasty';
import {ConfirmDialogModule} from 'primeng/primeng';
import {ConfirmationService} from 'primeng/api';

import {NavbarComponent} from './navbar/navbar.component';
import {ErrorHandlerService} from './error-handler.service';
import {LancamentoService} from '../lancamentos/lancamento.service';
import {PessoaService} from '../pessoas/pessoa.service';
import {CategoriaService} from '../categorias/categoria.service';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    ErrorHandlerService,
    ConfirmationService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule {
}
