import { ReceitaService } from './receita.service';

describe('ReceitaService', () => {
  let service: ReceitaService;

  beforeEach(() => {
    service = new ReceitaService();
  });

  it('deve listar oito receitas iniciais', () => {
    expect(service.listar().length).toBe(8);
    expect(service.totalReceitas()).toBe(8);
  });

  it('deve buscar por nome e categoria', () => {
    expect(service.buscarPorNome('chocolate')[0].nome).toBe('Bolo de chocolate intenso');
    expect(service.filtrarPorCategoria('Bebidas').length).toBe(1);
    expect(service.filtrarPorCategoria('Todas').length).toBe(8);
  });

  it('deve localizar por ID e retornar undefined para ID inexistente', () => {
    expect(service.buscarPorId(3)?.categoria).toBe('Sobremesas');
    expect(service.buscarPorId(999)).toBeUndefined();
  });

  it('deve adicionar uma receita com o próximo ID', () => {
    const criada = service.adicionar({
      nome: 'Salada cítrica', descricao: 'Uma salada fresca.', categoria: 'Vegetariana', tempoPreparo: 12,
      dificuldade: 'Fácil', imagem: 'https://example.com/salada.jpg', ingredientes: ['folhas'], modoPreparo: ['misture'], favorita: false,
    });
    expect(criada.id).toBe(9);
    expect(service.totalReceitas()).toBe(9);
    expect(service.buscarPorId(9)?.nome).toBe('Salada cítrica');
  });
});
