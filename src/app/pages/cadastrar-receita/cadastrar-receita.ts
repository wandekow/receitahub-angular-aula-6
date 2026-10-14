import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NovaReceita } from '../../models/receita.model';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-cadastrar-receita-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-receita.html',
  styleUrl: './cadastrar-receita.scss',
})
export class CadastrarReceitaPage {
  private readonly receitaService = inject(ReceitaService);
  private readonly router = inject(Router);
  readonly categorias = ['Massas', 'Brunch', 'Sobremesas', 'Carnes', 'Vegetariana', 'Bebidas'];
  receita: NovaReceita = { nome: '', descricao: '', categoria: 'Vegetariana', tempoPreparo: 30, dificuldade: 'Fácil', imagem: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85', ingredientes: [], modoPreparo: [], favorita: false };
  ingredientesTexto = '';
  preparoTexto = '';
  sucesso = false;

  salvar(formulario: NgForm): void {
    if (formulario.invalid || this.receita.tempoPreparo < 1 || !this.ingredientesTexto.trim() || !this.preparoTexto.trim()) {
      formulario.control.markAllAsTouched();
      return;
    }
    const novaReceita: NovaReceita = { ...this.receita, ingredientes: this.ingredientesTexto.split('\n').map((item) => item.trim()).filter(Boolean), modoPreparo: this.preparoTexto.split('\n').map((item) => item.trim()).filter(Boolean) };
    const criada = this.receitaService.adicionar(novaReceita);
    this.sucesso = true;
    setTimeout(() => this.router.navigate(['/receitas', criada.id]), 650);
  }
}
