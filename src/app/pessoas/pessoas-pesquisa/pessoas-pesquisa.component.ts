import {Component, ViewChild} from '@angular/core';

import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {ToastyService} from 'ng2-toasty';

import {PessoaFiltro, PessoaService} from '../pessoa.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {errorHandler} from "@angular/platform-browser/src/browser";

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];
  @ViewChild('tabela') grid;

  constructor(private pessoaService: PessoaService,
              private errorHandler: ErrorHandlerService,
              private confirmation: ConfirmationService,
              private toasty: ToastyService) {
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.pessoas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(pessoa: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.toasty.success('Pessoa excluída com sucessso');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
