import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdressSearchComponent } from './components/address-search/address-search.component';

const routes = [{ path: '', component: AdressSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdressSearchRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
