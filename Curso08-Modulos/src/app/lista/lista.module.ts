import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ListagemComponent } from './listagem/listagem.component';



@NgModule({
  declarations: [
    InputComponent,
    ListagemComponent,
  ],
  exports: [
    InputComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListaModule { }
