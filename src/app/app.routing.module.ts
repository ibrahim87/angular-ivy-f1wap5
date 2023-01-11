import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./address-search/address-search.module').then(
        (m) => m.AddressSearchModule
      ),
  },
];

@NgModule({
  imports: [CommonModule],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
