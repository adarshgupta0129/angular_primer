import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundRoutingModule } from './fund-routing.module';
import { FundComponent } from './fund.component';

@NgModule({
  imports: [
    CommonModule,
    FundRoutingModule
  ],
  declarations: [FundComponent]
})
export class FundModule { }
