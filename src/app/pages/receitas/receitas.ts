import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReceitaCardComponent } from '../../components/receita-card/receita-card';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-receitas-page',
  standalone: true,
  imports: [FormsModule, ReceitaCardComponent],
  templateUrl: './receitas.html',
  styleUrl: './receitas.scss',
})
export class ReceitasPage {
  private readonly receitaService = inject(ReceitaService);
  termoBusca = '';
  categoriaSelecionada = 'Todas';

  get categorias(): string[] {
    return ['Todas', ...this.receitaService.categorias()];
  }

  get receitasFiltradas() {
    let resultado = this.receitaService.filtrarPorCategoria(this.categoriaSelecionada);
    const termo = this.termoBusca.trim().toLocaleLowerCase();
    if (termo) resultado = resultado.filter((receita) => receita.nome.toLocaleLowerCase().includes(termo));
    return resultado;
  }

  limparFiltros(): void {
    this.termoBusca = '';
    this.categoriaSelecionada = 'Todas';
  }

  alternarFavorito(id: number): void {
    this.receitaService.alternarFavorita(id);
  }
}
