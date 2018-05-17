import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RelatoriosRoutingModule} from './relatorios-routing.module';
import {SharedModule} from '../shared/shared.module';
import { RelatorioLancamentosComponent } from './relatorio-lancamentos/relatorio-lancamentos.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RelatoriosRoutingModule
  ],
  declarations: [RelatorioLancamentosComponent]
})
export class RelatoriosModule { }
