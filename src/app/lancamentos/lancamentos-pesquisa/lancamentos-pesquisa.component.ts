import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {ToastyService} from 'ng2-toasty';

import {LancamentoFiltro, LancamentoService} from '../lancamento.service';
import {ErrorHandlerService} from '../../core/error-handler.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(private lancamentoService: LancamentoService,
              private errorHandler: ErrorHandlerService,
              private toastyService: ToastyService,
              private confirmation: ConfirmationService,
              private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de lançamentos');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.toastyService.success('Lançamento excluído com sucessso');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
