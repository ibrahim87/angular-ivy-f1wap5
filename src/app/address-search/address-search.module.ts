import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressService } from '../core/services/address.service';
import { AdressSearchComponent } from './components/address-search/address-search.component';
import { AdressSearchRoutingModule } from './address-search.routing.module';

@NgModule({
  imports: [CommonModule, AdressSearchRoutingModule],
  declarations: [AdressSearchComponent],
  providers: [AddressService],
})
export class AddressSearchModule {}
