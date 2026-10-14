export interface Receita {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  tempoPreparo: number;
  dificuldade: 'Fácil' | 'Média' | 'Difícil';
  imagem: string;
  ingredientes: string[];
  modoPreparo: string[];
  favorita: boolean;
}

export type NovaReceita = Omit<Receita, 'id'>;
