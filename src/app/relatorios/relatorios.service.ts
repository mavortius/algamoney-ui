import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';

import * as moment from 'moment';

import {environment} from '../../environments/environment';
import {MoneyHttp} from '../seguranca/money-http';


@Injectable()
export class RelatoriosService {

  lancamentosUrl = `${environment.apiUrl}/lancamentos`;

  constructor(private http: MoneyHttp) {
  }

  lancamentosPorPessoa(inicio: Date, fim: Date) {
    const params = new HttpParams()
      .append('inicio', moment(inicio).format('YYYY-MM-DD'))
      .append('fim', moment(fim).format('YYYY-MM-DD'));

    return this.http.get(`${this.lancamentosUrl}/relatorios/por-pessoa`,
      {params, responseType: 'blob'})
      .toPromise();
  }
}
