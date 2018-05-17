import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CalendarModule} from 'primeng/primeng';

import {RelatoriosRoutingModule} from './relatorios-routing.module';
import {SharedModule} from '../shared/shared.module';
import {RelatorioLancamentosComponent} from './relatorio-lancamentos/relatorio-lancamentos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    SharedModule,
    RelatoriosRoutingModule
  ],
  declarations: [RelatorioLancamentosComponent]
})
export class RelatoriosModule {
}
