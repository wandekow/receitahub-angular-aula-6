import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReceitaCardComponent } from '../../components/receita-card/receita-card';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, ReceitaCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {
  private readonly receitaService = inject(ReceitaService);
  readonly destaques = computed(() => this.receitaService.listar().filter((receita) => receita.favorita).slice(0, 3));
  readonly totalReceitas = computed(() => this.receitaService.totalReceitas());
  readonly totalFavoritas = computed(() => this.receitaService.totalFavoritas());

  alternarFavorito(id: number): void {
    this.receitaService.alternarFavorita(id);
  }
}
