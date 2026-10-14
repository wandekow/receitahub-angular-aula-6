import { Injectable, signal } from '@angular/core';
import { NovaReceita, Receita } from '../models/receita.model';

const imagens = {
  massas: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85',
  brunch: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=85',
  sobremesas: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85',
  carnes: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
  vegetariana: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85',
  bebidas: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85',
};

const receitasIniciais: Receita[] = [
  {
    id: 1,
    nome: 'Ravioli de abóbora e sálvia',
    descricao: 'Massa fresca recheada com abóbora assada, finalizada com manteiga noisette e folhas de sálvia.',
    categoria: 'Massas', tempoPreparo: 55, dificuldade: 'Difícil', imagem: imagens.massas, favorita: true,
    ingredientes: ['400 g de ravioli fresco', '300 g de abóbora cabotiá', '60 g de manteiga', 'Folhas de sálvia', 'Parmesão e noz-moscada'],
    modoPreparo: ['Asse a abóbora até ficar macia e tempere com noz-moscada.', 'Cozinhe o ravioli em água salgada até ficar al dente.', 'Doure a manteiga com a sálvia, envolva a massa e sirva com parmesão.'],
  },
  {
    id: 2,
    nome: 'Tostada de avocado',
    descricao: 'Pão rústico crocante, avocado cremoso, ovo mollet e um toque cítrico para começar bem o dia.',
    categoria: 'Brunch', tempoPreparo: 18, dificuldade: 'Fácil', imagem: imagens.brunch, favorita: true,
    ingredientes: ['2 fatias de pão sourdough', '1 avocado maduro', '2 ovos', 'Limão, sal e pimenta', 'Páprica defumada'],
    modoPreparo: ['Toste o pão até dourar.', 'Amasse o avocado com limão, sal e pimenta.', 'Cozinhe os ovos por seis minutos, monte as tostadas e finalize com páprica.'],
  },
  {
    id: 3,
    nome: 'Bolo de chocolate intenso',
    descricao: 'Bolo úmido de chocolate com cobertura brilhante e textura macia para celebrar qualquer ocasião.',
    categoria: 'Sobremesas', tempoPreparo: 70, dificuldade: 'Média', imagem: imagens.sobremesas, favorita: false,
    ingredientes: ['200 g de chocolate 60%', '3 ovos', '180 g de farinha', '150 g de açúcar', '120 g de manteiga'],
    modoPreparo: ['Derreta chocolate e manteiga em banho-maria.', 'Misture ovos e açúcar, incorpore os secos e o chocolate.', 'Asse a 180 °C por 35 minutos e cubra depois de frio.'],
  },
  {
    id: 4,
    nome: 'Steak com manteiga de ervas',
    descricao: 'Corte alto selado na frigideira, servido com manteiga aromática e batatas douradas.',
    categoria: 'Carnes', tempoPreparo: 35, dificuldade: 'Média', imagem: imagens.carnes, favorita: false,
    ingredientes: ['2 steaks de contrafilé', 'Batatas bolinha', 'Manteiga', 'Alecrim e tomilho', 'Alho e flor de sal'],
    modoPreparo: ['Tempere a carne e sele em frigideira muito quente.', 'Descanse os steaks por cinco minutos.', 'Misture a manteiga às ervas e sirva sobre a carne com batatas.'],
  },
  {
    id: 5,
    nome: 'Bowl verde crocante',
    descricao: 'Uma combinação fresca de folhas, grãos, legumes assados e molho de tahine com limão.',
    categoria: 'Vegetariana', tempoPreparo: 30, dificuldade: 'Fácil', imagem: imagens.vegetariana, favorita: true,
    ingredientes: ['Quinoa cozida', 'Grão-de-bico', 'Abóbora e folhas', 'Tahine', 'Limão e sementes'],
    modoPreparo: ['Asse o grão-de-bico e a abóbora com especiarias.', 'Prepare o molho misturando tahine, limão e água.', 'Monte o bowl com quinoa, folhas, legumes e sementes.'],
  },
  {
    id: 6,
    nome: 'Moscow mule de maracujá',
    descricao: 'Drink refrescante e equilibrado com gengibre, maracujá e espuma aromática.',
    categoria: 'Bebidas', tempoPreparo: 10, dificuldade: 'Fácil', imagem: imagens.bebidas, favorita: false,
    ingredientes: ['50 ml de vodka', 'Polpa de maracujá', '15 ml de limão', 'Ginger beer', 'Gelo e hortelã'],
    modoPreparo: ['Adicione gelo à caneca e despeje a vodka.', 'Junte maracujá, limão e complete com ginger beer.', 'Mexa delicadamente e finalize com hortelã.'],
  },
  {
    id: 7,
    nome: 'Risoto de cogumelos',
    descricao: 'Arroz arbóreo cremoso com cogumelos dourados, caldo aromático e parmesão.',
    categoria: 'Vegetariana', tempoPreparo: 42, dificuldade: 'Média', imagem: imagens.massas, favorita: false,
    ingredientes: ['Arroz arbóreo', 'Cogumelos frescos', 'Caldo de legumes', 'Vinho branco', 'Parmesão'],
    modoPreparo: ['Doure os cogumelos e reserve.', 'Refogue o arroz, adicione vinho e incorpore o caldo aos poucos.', 'Finalize com manteiga, parmesão e os cogumelos.'],
  },
  {
    id: 8,
    nome: 'Panna cotta de baunilha',
    descricao: 'Sobremesa italiana delicada, servida com frutas vermelhas e calda levemente ácida.',
    categoria: 'Sobremesas', tempoPreparo: 25, dificuldade: 'Média', imagem: imagens.sobremesas, favorita: false,
    ingredientes: ['400 ml de creme de leite', 'Baunilha', 'Açúcar', 'Gelatina sem sabor', 'Frutas vermelhas'],
    modoPreparo: ['Aqueça o creme com açúcar e baunilha sem deixar ferver.', 'Hidrate a gelatina e misture ao creme.', 'Distribua em taças, gele por quatro horas e sirva com frutas.'],
  },
];

@Injectable({ providedIn: 'root' })
export class ReceitaService {
  private readonly receitas = signal<Receita[]>(receitasIniciais);

  listar(): Receita[] {
    return this.receitas();
  }

  buscarPorId(id: number): Receita | undefined {
    return this.receitas().find((receita) => receita.id === id);
  }

  adicionar(receita: NovaReceita): Receita {
    const proximoId = Math.max(...this.receitas().map((item) => item.id), 0) + 1;
    const novaReceita: Receita = { ...receita, id: proximoId };
    this.receitas.update((lista) => [...lista, novaReceita]);
    return novaReceita;
  }

  filtrarPorCategoria(categoria: string): Receita[] {
    if (!categoria || categoria === 'Todas') return this.listar();
    return this.receitas().filter((receita) => receita.categoria === categoria);
  }

  buscarPorNome(nome: string): Receita[] {
    const termo = nome.trim().toLocaleLowerCase();
    if (!termo) return this.listar();
    return this.receitas().filter((receita) => receita.nome.toLocaleLowerCase().includes(termo));
  }

  totalReceitas(): number {
    return this.receitas().length;
  }

  totalFavoritas(): number {
    return this.receitas().filter((receita) => receita.favorita).length;
  }

  categorias(): string[] {
    return [...new Set(this.receitas().map((receita) => receita.categoria))];
  }

  alternarFavorita(id: number): void {
    this.receitas.update((lista) => lista.map((receita) => receita.id === id ? { ...receita, favorita: !receita.favorita } : receita));
  }
}
