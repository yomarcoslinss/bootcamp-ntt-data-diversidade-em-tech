import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexModule } from './pages/index/index.module';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {
    path: '', // caminho • Obs : Definir o caminho como vazio, irá torna-lo como página padrão do site
    component: TitleComponent ,
    pathMatch: 'full', // full: quando eu quero a URL EXATA !   prefix: quando eu quero que a url contenha o prefixo e outras coisas depois. 
  },
  {
    path: 'portifolio',
    component: CardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
