import { colors } from "../util/Cores";

export abstract class Viagens {
  private _id: number;
  private _destino: string;
  private _duracao: string;
  private _preco: number;
  private _tipo: number;

  constructor(
    id: number,
    destino: string,
    duracao: string,
    preco: number,
    tipo: number
  ) {
    this._id = id;
    this._destino = destino;
    this._duracao = duracao;
    this._preco = preco;
    this._tipo = tipo;
  }

  public get id(): number {
    return this._id;
  }

  public get destino(): string {
    return this._destino;
  }

  public get duracao(): string {
    return this._duracao;
  }

  public get preco(): number {
    return this._preco;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set destino(value: string) {
    this._destino = value;
  }

  public set duracao(value: string) {
    this._duracao = value;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public set tipo(value: number) {
    this._tipo = value;
  }

  public visualizar() {
    let tipo: string;
    switch (this._tipo) {
      case 1:
        tipo = "Mochilão";
        break;
      case 2:
        tipo = "Retiro Espiritual";
        break;
      default:
        tipo = "Tipo Inválida";
        break;
    }
    console.log(
      colors.bg.white,
      colors.fg.yellowstrong,
        "****************************************************"
    );
    console.log("            Dados da Viagem                      ");
    console.log("***********************************************\n");
    console.log(`Destino: ${this._destino}`);
    console.log(`ID da Viagem: ${this._id}`);
    console.log(`Tipo de Viagem: ${tipo}`);
    console.log(`Duração da viagem: ${this._destino}`);

    console.log(
      `Preco: ${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(this._preco)}`,
      colors.reset
    );
  }
}
