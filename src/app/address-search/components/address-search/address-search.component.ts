import { Component, OnInit } from '@angular/core';
import { Address } from '../../../core/interfaces/address.interface';
import { AddressService } from '../../../core/services/address.service';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css'],
})
export class AdressSearchComponent implements OnInit {
  public addressToSearch: Address.SearchResponse;
  public address: Address.SearchResponse;

  constructor(private readonly addressService: AddressService) {}

  public ngOnInit(): void {}

  public getAdressToSearch(street: string): void {
    this.addressService.search(street).subscribe((data) => {
      this.addressToSearch = data;
      console.log(this.addressToSearch);
    });
  }
}
