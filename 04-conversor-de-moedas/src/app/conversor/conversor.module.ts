import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives/numero.directive';


@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
    
  ],

  exports: [
    ConversorComponent
  ],

  providers: [
    MoedaService,
    ConversorService
  ]

})

export class ConversorModule { }
