import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../interfaces/address.interface';

@Injectable()
export class AddressService {
  private apiUrl = 'https://api-adresse.data.gouv.fr/search';

  constructor(private readonly httpClient: HttpClient) {}

  /**
   * GET request example :
   * https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port
   */
  public search(value: string): Observable<Address.SearchResponse> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('q', value);
    return this.httpClient.get<Address.SearchResponse>(
      `${this.apiUrl}/?q=${value}`
    );
  }
}
