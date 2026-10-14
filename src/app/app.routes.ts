import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.HomePage) },
  { path: 'receitas', loadComponent: () => import('./pages/receitas/receitas').then((m) => m.ReceitasPage) },
  { path: 'receitas/:id', loadComponent: () => import('./pages/receita-detalhes/receita-detalhes').then((m) => m.ReceitaDetalhesPage) },
  { path: 'cadastrar', loadComponent: () => import('./pages/cadastrar-receita/cadastrar-receita').then((m) => m.CadastrarReceitaPage) },
  { path: 'sobre', loadComponent: () => import('./pages/sobre/sobre').then((m) => m.SobrePage) },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFoundPage) },
];
