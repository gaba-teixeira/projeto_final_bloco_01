import { Viagens } from "../model/Viagens";
import { Viajantes } from "../model/Viajantes";
import { ViagensRepository } from "../repository/ViagensRepository";
import { colors } from "../util/Cores";

export class ViagensController implements ViagensRepository {
  private listaViagens = new Array<Viagens>();
  private listaViajantes = new Array<Viajantes>();

  public id: number = 0;

  procurarPorId(id: number): void {
    let buscaViagem = this.buscarnoArray(id);
    if (buscaViagem !== null) {
      buscaViagem.visualizar();
    } else
      console.log(
        colors.fg.red,
        `Viagem: ${id} não foi encontrado`,
        colors.reset
      );
  }
  listarTodas(): void {
    for (let viagem of this.listaViagens) {
      viagem.visualizar();
    }
  }

  cadastrar(viagem: Viagens): void {
    this.listaViagens.push(viagem);
    console.log(
      colors.fg.greenstrong,
      "A viagem foi cadastrada com sucesso!",
      colors.reset
    );
  }
  atualizar(viagem: Viagens): void {
    let buscaViagem = this.buscarnoArray(viagem.id);
    if (buscaViagem !== null) {
      this.listaViagens[this.listaViagens.indexOf(buscaViagem)] = viagem;
      console.log(
        colors.fg.greenstrong,
        `Viagem: ${viagem.destino} foi atualizado com sucesso!`,
        colors.reset
      );
    } else
      console.log(colors.fg.red, "Viagem não foi encontrado", colors.reset);
  }

  deletar(id: number): void {
    let buscaViagem = this.buscarnoArray(id);
    if (buscaViagem !== null) {
      this.listaViagens.splice(this.listaViagens.indexOf(buscaViagem), 1);
      console.log(
        colors.fg.greenstrong,
        `Viagem: ${buscaViagem.destino} foi deletado com sucesso!`,
        colors.reset
      );
    } else
      console.log(colors.fg.red, "Viagem não foi encontrado", colors.reset);
  }

  procurarPorDestino(destino: string): void {
    let buscaPorDestino = this.listaViagens.filter((viagem) =>
      viagem.destino.toUpperCase().includes(destino.toUpperCase())
    );
    if (buscaPorDestino.length > 0) {
      buscaPorDestino.forEach((viagem) => viagem.visualizar());
    } else {
      console.log(
        colors.fg.red,
        `Viagem: ${destino} não encontrado!`,
        colors.reset
      );
    }
  }

  listarTodosViajantes(): void {
    this.listaViajantes.forEach((viajantes) => viajantes.visualizar());
  }

  comprar(
    id: number,
    nome: string,
    idade: number,
    email: string,
    telefone: string
  ): void {
    let buscaViagem = this.buscarnoArray(id);
    if (buscaViagem !== null) {
      let novoViajante = new Viajantes(
        buscaViagem.id,
        buscaViagem.destino,
        buscaViagem.duracao,
        buscaViagem.preco,
        buscaViagem.tipo,
        nome,
        email,
        telefone,
        idade
      );

      this.listaViajantes.push(novoViajante);
      novoViajante.visualizar();
      console.log(
        colors.fg.red,
        `PARABÉNS! VOCÊ VAI VIAJAR PARA ${buscaViagem.destino.toUpperCase()} COM A LáFora!!! \n INFORMAÇÕES DE PAGAMENTO FORAM ENVIADAS VIA EMAIL - AGUARDE MAIS INFORMAÇÕES!`
      );
    } else {
      console.log(
        colors.fg.red,
        `Viagem com ID ${id} não encontrada.`,
        colors.reset
      );
    }
  }

  public gerarId(): number {
    return ++this.id;
  }

  public buscarnoArray(id: number): Viagens | null {
    for (let viagem of this.listaViagens) {
      if (viagem.id === id) return viagem;
    }
    return null;
  }
}
