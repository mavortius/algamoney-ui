import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {SegurancaModule} from './seguranca/seguranca.module';
import {DashboardModule} from "./dashboard/dashboard.module";
import {RelatoriosModule} from "./relatorios/relatorios.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    CoreModule,
    LancamentosModule,
    PessoasModule,
    DashboardModule,
    RelatoriosModule,
    SegurancaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
