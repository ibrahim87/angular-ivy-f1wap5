import { Component } from '@angular/core';
import { Address } from './core/interfaces/address.interface';
import { AddressService } from './core/services/address.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
