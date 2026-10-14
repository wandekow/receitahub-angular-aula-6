import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Receita } from '../../models/receita.model';

@Component({
  selector: 'app-receita-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './receita-card.html',
  styleUrl: './receita-card.scss',
})
export class ReceitaCardComponent {
  receita = input.required<Receita>();
  favoritar = output<number>();
}
