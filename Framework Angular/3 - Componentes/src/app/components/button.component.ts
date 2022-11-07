import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label: string;
  @Input() teste: number;
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['Vender', 'Comprar', 'Trocar'];
  buttonNumber: number = 1;
  buttonObject = {
    label: 'Adicionar ao carrinho',
  };

  getAlert(num: number) {
    alert(num);
  }
}
