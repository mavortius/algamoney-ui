import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';
import {MoneyHttp} from '../seguranca/money-http';

@Injectable()
export class CategoriaService {

  categoriasUrl = `${environment.apiUrl}/categorias`;

  constructor(private http: MoneyHttp) {
  }

  listarTodas(): Promise<any> {
    return this.http.get(this.categoriasUrl)
      .toPromise();
  }
}
