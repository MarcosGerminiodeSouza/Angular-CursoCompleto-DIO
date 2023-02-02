import { Component, OnInit } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo:string = "enable"
  corFundo:string = "green"
  corDaFonte:string = "yellow"
  item:string = ""
  lista:string[] = []
  isEnableBlock:boolean = true

  constructor() { }

  adicionarLista(){
    this.lista.push(this.item)
  }

  ngOnInit(): void {
  }

  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }

}
