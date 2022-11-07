import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  buttonLabel: string = 'Carrinho';
  buttonSecond: string = 'Adicionar aos favoritos';
  buttonThird: number = 19;
}
