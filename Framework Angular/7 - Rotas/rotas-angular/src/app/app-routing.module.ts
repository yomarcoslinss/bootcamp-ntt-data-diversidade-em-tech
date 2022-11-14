import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexModule } from './pages/index/index.module';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
 {
  path: '',
  component: TitleComponent ,
  pathMatch: 'full' , // full: Normalmente usado para a página principal • prefix: quando eu insiro a url principal e uso /exemplo, eu caio em uma subpagina
 },
 {
  //portfolio
  //portfolio/1
  path: 'portfolio',
  component: CardComponent,
  children: [ {path: ':id', component: CardComponent},  {path: ':id/:token', component: CardComponent}
]},


 {
  path: '**', // Rota coringa: caso o usuário insira um path inválido, ele será redirecionado ao caminho que eu definir: 
  redirectTo: '' // Caso eu deixe em branco '', o usuário será redirecionado para a página principal
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
