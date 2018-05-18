import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/primeng';

import {CurrencyMaskModule} from 'ng2-currency-mask';

import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';
import {LancamentosPesquisaComponent} from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {LancamentosRoutingModule} from './lancamentos-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    FileUploadModule,

    SharedModule,
    CoreModule,
    LancamentosRoutingModule
  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ],
  exports: []
})
export class LancamentosModule {
}
