import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {registerLocaleData} from '@angular/common';
import {RouterModule} from '@angular/router';
import localePt from '@angular/common/locales/pt';
import {Title} from '@angular/platform-browser';

import {JwtHelper} from 'angular2-jwt';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';
import {MessageService} from 'primeng/components/common/messageservice';

import {ErrorHandlerService} from './error-handler.service';
import {LancamentoService} from '../lancamentos/lancamento.service';
import {PessoaService} from '../pessoas/pessoa.service';
import {CategoriaService} from '../categorias/categoria.service';
import {DashboardService} from '../dashboard/dashboard.service';
import {NavbarComponent} from './navbar/navbar.component';
import {AuthService} from '../seguranca/auth.service';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada.component';
import {NaoAutorizadoComponent} from './nao-autorizado.component';
import {RelatoriosService} from '../relatorios/relatorios.service';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    GrowlModule,
    ConfirmDialogModule,
  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    NavbarComponent,
    GrowlModule,
    ConfirmDialogModule,
    RouterModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    DashboardService,
    RelatoriosService,
    ErrorHandlerService,
    AuthService,

    ConfirmationService,
    MessageService,
    JwtHelper,
    Title,
    {provide: LOCALE_ID, useValue: 'pt'}
  ]
})
export class CoreModule {
}
