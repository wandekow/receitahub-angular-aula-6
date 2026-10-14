import { DecimalPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Receita } from '../../models/receita.model';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-receita-detalhes-page',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './receita-detalhes.html',
  styleUrl: './receita-detalhes.scss',
})
export class ReceitaDetalhesPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly receitaService = inject(ReceitaService);
  receita?: Receita;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.receita = this.receitaService.buscarPorId(id);
    });
  }

  alternarFavorito(): void {
    if (this.receita) {
      this.receitaService.alternarFavorita(this.receita.id);
      this.receita = this.receitaService.buscarPorId(this.receita.id);
    }
  }
}
