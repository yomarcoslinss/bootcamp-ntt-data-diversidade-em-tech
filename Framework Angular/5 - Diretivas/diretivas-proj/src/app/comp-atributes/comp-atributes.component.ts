import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributes',
  templateUrl: './comp-atributes.component.html',
  styleUrls: ['./comp-atributes.component.css']
})
export class CompAtributesComponent implements OnInit {
  corFundo:string = "blue"
  corFonte:string = "aqua"
  estilo:string = "disable"
  item:string = ""
  lista:string[] = []
  isEnableBlock:boolean = true;

  constructor() { }

  adicionarLista() {
    this.lista.push(this.item)
  }

  ngOnInit(): void {
  }

  trocar() {
    if(this.estilo == "disable"){
      this.estilo = "enable"
    } else {
      this.estilo = "disable"
    }
  }

}
