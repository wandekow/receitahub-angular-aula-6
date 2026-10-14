import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class SobrePage {}
